import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Label, { LabelProps } from '.';

const meta: Meta = {
  title: 'Label',
  component: Label,
  argTypes: {
    background: { control: { type: 'color' } }
  }
};

export default meta;

export function Default(props: LabelProps) {
  return <Label {...props} />;
}
