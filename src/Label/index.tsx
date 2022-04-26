import React from 'react';
import './style.less';

export interface LabelProps {
  /** Text */
  text?: string;
  /** CSS background
   *
   * Default value: `'wheat'`
   */
  background?: string;
}

/** Simple Label with text, background and rounded border */
export default function Label(props: LabelProps) {
  const { text, background = 'wheat' } = props;
  return (
    <div className="label" style={{ background }}>
      {text}
    </div>
  );
}
