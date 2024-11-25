import React from 'react';
import { Form, Input } from 'antd';
import colors from '../../../assets/styles/__variables.scss';
import styles from './InputField.module.scss';
import { useTranslation } from 'react-i18next';

const InputField = ({ label, required, name }) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={
        <label
          style={{
            fontWeight: '600',
            color: colors.textPrimary,
            height: '20px',
            lineHeight: '20px',
          }}
          htmlFor={name}>
          {label}
        </label>
      }
      name={name}
      rules={[{ required, message: t('errors.requiredField') }]}
      labelCol={{
        span: 24,
        style: {
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          margin: 0,
        },
      }}
      style={{ margin: 0 }}>
      <Input aria-label={name} id={name} className={styles.input} />
    </Form.Item>
  );
};

export default InputField;
