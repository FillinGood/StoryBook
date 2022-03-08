import React from 'react';
import { shallow } from 'enzyme';
import Label from '.';

it('renders empty', () => {
  const el = shallow(<Label />);
  expect(el.text()).toBe('');
});
it('renders text', () => {
  const el = shallow(<Label text="text" />);
  expect(el.text()).toBe('text');
});
it('renders with background', () => {
  const el = shallow(<Label background="red" />);
  expect(el.render().attr('style')).toBe('background:red');
});
