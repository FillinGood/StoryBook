import React from 'react';
import classNames from 'classnames';
import './style.less';

export interface FlipCardProps {
  className?: string;
  flipped?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  front: React.ReactElement;
  back: React.ReactElement;
}

export default function FlipCard(props: FlipCardProps) {
  const { className, flipped, onEnter, onLeave, front, back } = props;
  const onMouseEnter = React.useCallback(() => onEnter?.(), [onEnter]);
  const onMouseLeave = React.useCallback(() => onLeave?.(), [onLeave]);
  return (
    <div
      className={classNames('flip-card', className, { flipped })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="inner">
        <div className="front">{front}</div>
        <div className="back">{back}</div>
      </div>
    </div>
  );
}
