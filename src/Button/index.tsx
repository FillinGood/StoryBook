import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './style.less';
import classNames from 'classnames';

export interface ButtonProps {
  /** Content */
  text: string;
  /** Optional FontAwesome Icon to display on the button */
  icon?: IconDefinition;
  /** Callback fired on click */
  onClick?: () => void;
  /** If `true` - button does not react on click */
  disabled?: boolean;
}

/** Simple Button with icon and content */
export default function Button(props: ButtonProps) {
  const { text, icon, onClick, disabled } = props;
  const Clicked = React.useCallback(() => {
    if (!disabled && onClick) {
      return onClick();
    }
  }, [onClick, disabled]);
  return (
    <div className={classNames('button', { disabled })} onClick={Clicked}>
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      <div>{text}</div>
    </div>
  );
}
