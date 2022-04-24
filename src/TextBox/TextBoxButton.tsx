import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export interface TextBoxButtonProps {
  icon: IconDefinition;
  onClick: (ref: React.RefObject<HTMLInputElement>) => void;
}

export class TextBoxButtonComponent extends React.Component<TextBoxButtonProps> {
  render() {
    return null;
  }
}

// тип, ограничивающий children в TextBox, чтобы они имели именно такие пропы
// и были именно такого класса
type TextBoxButton = React.CElement<TextBoxButtonProps, TextBoxButtonComponent>;
export default TextBoxButton;
