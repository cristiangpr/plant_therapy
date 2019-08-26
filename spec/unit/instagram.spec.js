import React from 'react';
import Instagram from "../../src/components/Instagram.js";
 import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe(Instagram, function() {
  it('renders correctly', () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Instagram/>
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
