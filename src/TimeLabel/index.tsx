import React from 'react';
import classNames from 'classnames';
import moment, { LocaleSpecifier } from 'moment';
import './style.less';

export interface TimeLabelProps {
  /** Root element className */
  className?: string;
  /** Display datetime */
  time: Date;
  /** if true, display in relative format */
  relative?: boolean;
  /**
   * if true, display date too.
   *
   * Works only with `relative == false`
   */
  withDate?: boolean;
  /**
   * if true, display seconds.
   *
   * Works only with `relative == false`
   */
  withSeconds?: boolean;
  /** display string locale.
   *
   * Defaults to browser language. Fallback = `'en'`
   */
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

/** Relative/absolute DateTime display. */
export default function TimeLabel(props: TimeLabelProps) {
  const { className, time, relative, withDate, withSeconds, locale } = props;
  return (
    <div className={classNames('timelabel', className)}>
      {relative ? rel(time, locale) : fmt(time, withDate, withSeconds, locale)}
    </div>
  );
}
