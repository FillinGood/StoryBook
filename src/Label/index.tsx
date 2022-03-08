import React from 'react';
import './style.less';

export interface LabelProps {
  text?: string;
  background?: string;
}

export default function Label(props: LabelProps) {
  const { text, background = 'wheat' } = props;
  return (
    <div className="label" style={{ background }}>
      {text}
    </div>
  );
}
