import classNames from 'classnames/bind'
import styles from './Section.module.scss'
import React from 'react'

const cx = classNames.bind(styles)

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section
