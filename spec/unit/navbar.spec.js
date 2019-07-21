import React from 'react';
import Navbar from "../../src/components/Navbar.js";
 import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe(Navbar, function() {
  it("should be defined", () => {
    expect(Navbar).toBeDefined();

  });
  test('should contain appropriate links', () => {
    const component = renderer.create(
  <MemoryRouter>
      <Navbar/>
  </MemoryRouter>
    );
    let treeString = JSON.stringify(component);

    expect(treeString).toContain("Farms");
  });


});
