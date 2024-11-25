import React, { useState, useRef } from 'react';
import { Form, DatePicker, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import styles from './DatePickerField.module.scss';
import colors from '../../../assets/styles/__variables.scss';

const DatePickerField = ({ label, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const datePickerRef = useRef(null);

  const handleOpenCalendar = () => {
    setFocus(!focus);
    if (datePickerRef.current && focus === false) {
      datePickerRef.current?.focus?.();
      setIsOpen(!isOpen);
    } else if (isOpen === true && focus === true) {
      setIsOpen(false);
      setFocus(false);
    }
  };

  const handleDateChange = () => {
    setIsOpen(false);
    setFocus(!focus);
  };

  const handleFocus = () => {
    setFocus(true);
    setIsOpen(true);
  };

  return (
    <Form.Item
      label={
        <label
          style={{ fontWeight: '600', color: colors.textPrimary, height: '20px' }}
          htmlFor={name}>
          {label}
        </label>
      }
      labelCol={{
        span: 24,
        style: {
          height: '28px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          margin: 0,
        },
      }}
      className={styles.datePickerField}>
      <div className={styles.datePickerWrapper}>
        <DatePicker
          id={name}
          className={styles.datePickerInput}
          aria-labelledby={name}
          suffixIcon={null}
          open={isOpen}
          onBlur={() => setIsOpen(false)}
          onFocus={handleFocus}
          onChange={handleDateChange}
          ref={datePickerRef}
          placeholder=""
        />
        <Button
          type="text"
          icon={<CalendarOutlined />}
          className={styles.calendarButton}
          onClick={handleOpenCalendar}
          aria-label={name}
        />
      </div>
    </Form.Item>
  );
};

export default DatePickerField;
