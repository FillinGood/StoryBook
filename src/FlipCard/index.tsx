import React from 'react';
import classNames from 'classnames';
import './style.less';

export interface FlipCardProps {
  /** Root element className */
  className?: string;
  /** If true - Card is flipped */
  flipped?: boolean;
  /** Callback fired on mouse enter */
  onEnter?: () => void;
  /** Callback fired on mouse leave */
  onLeave?: () => void;
  /** Front side element */
  front: React.ReactElement;
  /** Back side element */
  back: React.ReactElement;
}

/** Card with 3D flip animation */
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
