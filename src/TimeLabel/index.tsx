import React from 'react';
import classNames from 'classnames';
import moment, { LocaleSpecifier } from 'moment';
import './style.less';

export interface TimeLabelProps {
  className?: string;
  time: Date;
  relative?: boolean;
  withDate?: boolean;
  withSeconds?: boolean;
  locale?: LocaleSpecifier;
  children?: never;
}

function rel(to: Date, locale?: LocaleSpecifier) {
  locale = locale || window.navigator.language || 'en';
  const str = moment(to).locale(locale).fromNow();
  return str;
}
function fmt(
  time: Date,
  date?: boolean,
  secs?: boolean,
  locale?: LocaleSpecifier
) {
  locale = locale || window.navigator.language || 'en';
  const m = moment(time).locale(locale);
  const t = m.format(secs ? 'LTS' : 'LT');
  const d = m.format('L');
  if (date) return `${d} ${t}`;
  return t;
}

export default function TimeLabel(props: TimeLabelProps) {
  const { className, time, relative, withDate, withSeconds, locale } = props;
  return (
    <div className={classNames('timelabel', className)}>
      {relative ? rel(time, locale) : fmt(time, withDate, withSeconds, locale)}
    </div>
  );
}
