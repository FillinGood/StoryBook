import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { defaultValue: false },
    children: { type: 'string' },
    onChange: { action: 'changed', table: { disable: true } }
  }
};
export default meta;

export function Default(props: CheckboxProps) {
  return (
    <Checkbox checked={props.checked} onChange={props.onChange}>
      {props.children}
    </Checkbox>
  );
}
export function Interactive(props: CheckboxProps) {
  return <Wrapper>{props.children}</Wrapper>;
}

// * позволяет использовать react.useState там, где не позволяет storybook (storybook не позволяет использовать реактовские хуки)
// реактовские хуки - мета функции реакта (useState, useCallback и тд)
function Wrapper(props: CheckboxProps) {
  const [checked, setChecked] = React.useState(false);
  const onChange = React.useCallback(
    (checked: boolean) => {
      setChecked(checked);
    },
    [setChecked]
  );
  return (
    <Checkbox checked={checked} onChange={onChange}>
      {props.children}
    </Checkbox>
  );
}
