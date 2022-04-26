import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextBoxButton, { TextBoxButtonComponent } from './TextBoxButton';
import './style.less';

type onChangeHandler = (changed: string) => void;

export interface TextBoxProps {
  /** Value */
  value: string;
  /**
   * Callback fired when Value changes
   *
   * @param {string} changed - new Value
   */
  onChange?: onChangeHandler;
  /** Root element className */
  className?: string;
  /**
   * Buttons to display on the right.
   *
   * Recommended to use `<TextBox.Button>`
   */
  children?: TextBoxButton[] | TextBoxButton;
}

/** Input field with custom buttons */
function TextBoxComponent(props: TextBoxProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  const buttons = React.useMemo(() => {
    if (!props.children) return [];
    if (Array.isArray(props.children)) return props.children;
    return [props.children];
  }, [props.children]);

  const onChange = React.useCallback(
    (v: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(v.currentTarget.value);
      }
    },
    [props.onChange]
  );

  return (
    <div className={classNames('textbox', props.className)}>
      <input ref={ref} type="text" value={props.value} onChange={onChange} />
      <div>
        {buttons.map((b, i) => (
          <div key={i} onClick={() => b.props.onClick(ref)}>
            <FontAwesomeIcon icon={b.props.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

// немного магии, заставляет реакт и тайпскрип верить, что
// <TextBox.Button> = <TextBoxButtonComponent>
type TextBoxWrap = typeof TextBoxComponent & {
  /** Button for {@link TextBoxProps.children} */
  Button: typeof TextBoxButtonComponent;
};
/** Input field with custom buttons */
const TextBox = TextBoxComponent as TextBoxWrap;
TextBox.Button = TextBoxButtonComponent;
export default TextBox;
