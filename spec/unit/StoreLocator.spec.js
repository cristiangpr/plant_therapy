import React from 'react';
import StoreLocator from "../../src/components/StoreLocator.js";

 import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe(StoreLocator, function() {
  it('renders correctly', () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <StoreLocator/>
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
