import React from 'react';
import Navbar from "../../src/components/Navbar.js";
 import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe(Navbar, function() {
  it("should be defined", () => {
    expect(Navbar).toBeDefined();

  });
  test('should contain appropriate links', () => {
    const component = renderer.create(
  <BrowserRouter>
      <Navbar/>
  </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toContain("Farms");
  });


});
