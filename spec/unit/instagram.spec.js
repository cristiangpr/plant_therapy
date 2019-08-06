import React from 'react';
import Navbar from "../../src/components/Navbar.js";
import StoreNavbar from "../../src/components/StoreNavbar.js";
 import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe(Navbar, function() {
  it('renders correctly', () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Navbar/>
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
