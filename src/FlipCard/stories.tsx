import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import FlipCard, { FlipCardProps } from '.';
import './stories-style.less';

const meta: Meta = {
  title: 'FlipCard',
  component: FlipCard,
  argTypes: {
    front: { type: 'string' },
    back: { type: 'string' },
    onEnter: { table: { disable: true } },
    onLeave: { table: { disable: true } }
  }
};
export default meta;

export function Default(props: FlipCardProps) {
  const { front, back, ...rest } = props;
  return (
    <FlipCard
      front={<Front>{front}</Front>}
      back={<Back>{back}</Back>}
      {...rest}
    />
  );
}
export function Interactive(props: FlipCardProps) {
  return <Wrapper {...props}></Wrapper>;
}
// Установка argTypes только для Interactive (в дополнение к написанному в meta)
(Interactive as any).argTypes = {
  // Скрытие поля flipped из таблицы Controls сторибука
  flipped: { table: { disable: true } }
};

// * позволяет использовать react.useState там, где не позволяет storybook (storybook не позволяет использовать реактовские хуки)
// реактовские хуки - мета функции реакта (useState, useCallback и тд)
function Wrapper(props: FlipCardProps) {
  const [flipped, setFlipped] = React.useState(false);
  const onEnter = React.useCallback(() => {
    setFlipped(true);
  }, [setFlipped]);
  const onLeave = React.useCallback(() => {
    setFlipped(false);
  }, [setFlipped]);
  return (
    <FlipCard
      flipped={flipped}
      front={<Front>{props.front}</Front>}
      back={<Back>{props.back}</Back>}
      onEnter={onEnter}
      onLeave={onLeave}
    />
  );
}

function Front({ children }: { children: React.ReactElement }) {
  return <div className="stories-front">{children}</div>;
}
function Back({ children }: { children: React.ReactElement }) {
  return <div className="stories-back">{children}</div>;
}
