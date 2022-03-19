import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import TextBox from '.';
import { faCircleXmark, faCopy } from '@fortawesome/free-regular-svg-icons';

const meta: Meta = {
  title: 'TextBox',
  component: TextBox,
  argTypes: {}
};
export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Default(a: any) {
  return <TextBox {...a}></TextBox>;
}

export function Interactive() {
  return <Wrapper />;
}

// * позволяет использовать react.useState там, где не позволяет storybook (storybook не позволяет использовать реактовские хуки)
// реактовские хуки - мета функции реакта (useState, useCallback и тд)

function Wrapper() {
  const [value, setValue] = React.useState('');
  const onChange = React.useCallback(
    (value: string) => {
      setValue(value);
    },
    [setValue]
  );
  const onClear = React.useCallback((ref:React.RefObject<HTMLInputElement>) => {
    setValue('');
    ref.current?.focus();
  }, [setValue]);
  const onCopy = React.useCallback(()=>{
    navigator.clipboard.writeText(value);
  }, [value])
  return (
    <TextBox value={value} onChange={onChange}>
      <TextBox.Button icon={faCircleXmark} onClick={onClear} />
      <TextBox.Button icon={faCopy} onClick={onCopy} />
    </TextBox>
  );
}
