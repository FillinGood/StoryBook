import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './style.less';
import classNames from 'classnames';

export interface ButtonProps {
  text: string;
  icon: IconDefinition;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { text, icon, onClick, disabled } = props;
  const Clicked = React.useCallback(() => {
    if (!disabled && onClick) {
      return onClick();
    }
  }, [onClick, disabled]);
  return (
    <div className={classNames('button', { disabled })} onClick={Clicked}>
      <FontAwesomeIcon icon={icon} className="button-icon" />
      <div>{text}</div>
    </div>
  );
}
