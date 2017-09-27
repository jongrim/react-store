import React from 'react';
import Button from '../components/Buttons.js';
import renderer from 'react-test-renderer';

it('Renders a button with text', () => {
  const component = renderer.create(<Button>TEXT</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
