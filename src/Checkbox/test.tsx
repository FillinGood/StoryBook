import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '.';

it('rendered', () => {
  // mount() - полностью рендерит эл (shallow рендерит только нулевой и первый уровень)
  const el = mount(<Checkbox />);
  expect(el.text()).toBe('');
});
it('calls on changed', () => {
  // jest.fn() - создаёт искуственную функцию для тестирования
  const m = jest.fn();
  const el = mount(<Checkbox onChange={m} />);
  // find() - поиск html эл
  // simulate() - симулирование события (click - событие клика мыши)
  el.find('.checkbox').simulate('click');
  // *.mock - объект с данными об использовании mock функции
  // *.mock.calls - массив с данными о вызовах функции (двухмерный массив, массив массивов)
  // *.mock.calls.length - количество вызовов (длинна массива вызовов)
  expect(m.mock.calls.length).toBe(1);
  // *.mock.calls[*][**] - * это индекс вызова, ** это индекс параметра вызова (значение параметра)
  expect(m.mock.calls[0][0]).toBe(true);
});
