import classNames from 'classnames/bind'
import styles from './Calendar.module.scss'

import Section from '@shared/Section'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
const cx = classNames.bind(styles)

const css = `
  .rdp-month_caption {
    display:none;
  }
  .rdp-nav {
    display:none;
  }
  .rdp-day {
    cursor: defalut;
  }
  .rdp-day_button {
    cursor: defalut !important;
    border: none !important;
  }
  .rdp-weekdays {
    font-weight: bold;
    font-size: 14px;
  }
  .rdp-selected {
    background-color: var(--red);
    border: none;
    border-radius: 999px;
    color: #fff;
  }
`

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          onSelect={() => null}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
