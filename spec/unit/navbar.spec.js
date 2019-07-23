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
  test('should contain appropriate links for main page', () => {
    const component = renderer.create(
  <MemoryRouter>
      <Navbar/>
  </MemoryRouter>
    );
    let treeString = JSON.stringify(component);

    expect(treeString).toContain("Farms");
      expect(treeString).toContain("Blog");
  });
  test('should contain appropriate links for store page', () => {
    const component = renderer.create(
  <MemoryRouter>
      <StoreNavbar/>
  </MemoryRouter>
    );
    let treeString = JSON.stringify(component);

    expect(treeString).toContain("Sign Out");
  });


});
