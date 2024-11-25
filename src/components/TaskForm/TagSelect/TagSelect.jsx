import React, { useState, useRef } from 'react';
import { Form, Select, Button } from 'antd';
import { PlusOutlined, CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './TagSelect.module.scss';
import colors from '../../../assets/styles/__variables.scss';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const TagSelect = ({ label, optionsValue = [], tagColor = colors.backgroundBadge, name }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const selectRef = useRef(null);

  const handleAddTagSelect = () => {
    setFocus(!focus);
    if (selectRef.current && focus === false) {
      selectRef.current?.focus?.();
      setIsOpen(!isOpen);
    } else if (isOpen === true && focus === true) {
      setIsOpen(false);
      setFocus(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
    setIsOpen(true);
  };

  const tagRender = (props) => {
    const { label, closable, onClose } = props;

    return (
      <span
        style={{
          backgroundColor: tagColor,
          border: `1px solid ${colors.borderBadge}`,
          color: colors.textPrimary,
          borderRadius: '4px',
          padding: '2px 8px',
          margin: '2px',
          display: 'inline-flex',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
        {label}
        {closable && (
          <span
            onClick={onClose}
            style={{
              marginLeft: '8px',
              cursor: 'pointer',
              color: colors.textPrimary,
            }}>
            ×
          </span>
        )}
      </span>
    );
  };

  return (
    <Form.Item
      label={
        <label htmlFor={name} style={{ fontWeight: '600', color: colors.textPrimary }}>
          {label}
        </label>
      }
      name={label}
      labelCol={{
        span: 24,
        style: {
          height: '28px',
          display: 'flex',
          alignItems: 'center',
        },
      }}
      className={styles.selectField}>
      <div className={styles.selectWrapper}>
        <Select
          id={name}
          suffixIcon={<CloseCircleOutlined />}
          aria-labelledby={name}
          mode="tags"
          style={{ width: '100%', backgroundColor: colors.backgroundInput }}
          tokenSeparators={[',']}
          allowClear
          tagRender={tagRender}
          open={isOpen}
          onBlur={() => setIsOpen(false)}
          onFocus={handleFocus}
          ref={selectRef}>
          {optionsValue.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
        <div className={styles.icons}>
          <Button
            type="text"
            icon={<PlusOutlined />}
            className={styles.iconButton}
            aria-label={t('taskForm.iconButtons.addButton')}
            onClick={handleAddTagSelect}
          />
          <Button
            type="text"
            icon={<SearchOutlined />}
            className={styles.iconButton}
            aria-label={t('taskForm.iconButtons.searchButton')}
          />
        </div>
      </div>
    </Form.Item>
  );
};

export default TagSelect;
