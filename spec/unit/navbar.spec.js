import React from 'react';
import Navbar from "../../src/components/Navbar.js";
 import {Link, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';



  test('should contain appropriate links', () => {
    const component = renderer.create(
  <MemoryRouter>
      <Navbar/>
  </MemoryRouter>
    );
    let instance = component.root;
    console.log(instance);
    const farmLink = instance.find(
        (el) => el.type === Link
            && el.text === "Farms"

    );



  });
