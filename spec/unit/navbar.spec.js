import React from 'react';
import Navbar from "../../src/components/Navbar.js";
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
  test('should contain appropriate links for page', () => {
    const component = renderer.create(
  <MemoryRouter>
      <Navbar/>
  </MemoryRouter>
    );
  const allListItems = component.root.findAll(element => element.type === "li")
console.log(allListItems);
    expect(allListItems).toContain("Farms");
  });


});
