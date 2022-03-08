import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquare as fasSquare,
  faCheckSquare as fasCheckSquare
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare
} from '@fortawesome/free-regular-svg-icons';
import './style.less';

export interface CheckboxProps extends React.PropsWithChildren<unknown> {
  checked?: boolean;
  // такой тип описывает функцию с одним параметром (boolean) и любым возвращаемым типом
  onChange?: (checked: boolean) => void;
  // в эту пропу попадает то, что пишется внутри компонента (между <...> и </...>)
  // пишем "React.ReactNode | React.ReactNode[]" для любого кол-ва "потомков"
  // если написать только "React.ReactNode", то разрешит только одного "потомка"
  // если написать "never", то не разрешит ни одного "потомка"

  //children?: React.ReactNode | React.ReactNode[];
}

export default function Checkbox(props: CheckboxProps) {
  const { checked, onChange, children } = props;
  const onClick = React.useCallback(() => {
    if (onChange) {
      onChange(!checked);
    }
  }, [checked, onChange]);
  return (
    <div className="checkbox" onClick={onClick}>
      <div className="checkbox-mark">
        {/* одновременно видно только одну иконку. сделано в style */}
        <FontAwesomeIcon icon={checked ? fasCheckSquare : fasSquare} />
        <FontAwesomeIcon icon={checked ? farCheckSquare : farSquare} />
      </div>
      <div className="checkbox-content">{children}</div>
    </div>
  );
}
