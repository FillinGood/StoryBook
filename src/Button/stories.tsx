import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from '.';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      options: Object.keys(fas),
      control: {
        type: 'select'
      }
    },
    disabled: {
      defaultValue: false
    },
    onClick: {
      action: 'click',
      table: {
        disable: true
      }
    }
  },
  args: {
    text: 'Text'
  }
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Default(props: any) {
  const { icon, ...rest } = props;
  const faIcon: IconDefinition = fas[icon as string];
  return <Button icon={faIcon} {...rest} />;
}
