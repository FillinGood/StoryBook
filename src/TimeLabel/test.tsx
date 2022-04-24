import React from 'react';
import { shallow } from 'enzyme';
import TimeLabel from '.';

it('renders absolute time', () => {
  const el = shallow(<TimeLabel time={new Date(0)} locale="en-US" />);
  expect(el.text()).toBe('7:00 AM');
});

it('renders relative time', () => {
  const el = shallow(<TimeLabel time={new Date()} locale="en-US" relative />);
  expect(el.text()).toBe('a few seconds ago');
});

it('renders with seconds', () => {
  const el = shallow(
    <TimeLabel time={new Date(0)} locale="en-US" withSeconds />
  );
  expect(el.text()).toBe('7:00:00 AM');
});

it('renders with date', () => {
  const el = shallow(<TimeLabel time={new Date(0)} locale="en-US" withDate />);
  expect(el.text()).toBe('01/01/1970 7:00 AM');
});

it('renders with date and seconds', () => {
  const el = shallow(
    <TimeLabel time={new Date(0)} locale="en-US" withDate withSeconds />
  );
  expect(el.text()).toBe('01/01/1970 7:00:00 AM');
});

it('renders absolute time in another locale (ru-RU)', () => {
  const el = shallow(<TimeLabel time={new Date(0)} locale="ru-RU" />);
  expect(el.text()).toBe('7:00');
});

it('renders relative time in another locale (ru-RU)', () => {
  const el = shallow(<TimeLabel time={new Date()} locale="ru-RU" relative />);
  expect(el.text()).toBe('несколько секунд назад');
});

it('applies className', () => {
  const el = shallow(<TimeLabel className="className" time={new Date()} />);
  expect(el.hasClass('className')).toBe(true);
});
