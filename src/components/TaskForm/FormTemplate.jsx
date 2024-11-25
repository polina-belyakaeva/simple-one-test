import React from 'react';
import { Form } from 'antd';
import styles from './TaskForm.module.scss';
import InputField from './Input/InputField';
import TagSelect from './TagSelect/TagSelect';
import DatePickerField from './DatePicker/DatePickerField';
import testDataEmployees from '../../assets/testDataEmployees';
import testDataGroup from '../../assets/testDataGroup';
import { useTranslation } from 'react-i18next';

const FormTemplate = () => {
  const { t } = useTranslation();

  return (
    <Form className={styles.form__fieldsGroup}>
      <div className={styles.form__fieldsGroup__content}>
        <InputField label={t('taskForm.formTemplate.theme')} name="theme" required />
        <InputField label={t('taskForm.formTemplate.status')} name="status" />
      </div>
      <div className={styles.form__fieldsGroup__content}>
        <InputField label={t('taskForm.formTemplate.description')} name="description" />
        <InputField label={t('taskForm.formTemplate.product')} name="product" />
      </div>
      <div className={styles.form__fieldsGroup__content}>
        <InputField label={t('taskForm.formTemplate.workingNotes')} name="workingNotes" required />
        <InputField label={t('taskForm.formTemplate.priority')} name="priority" />
      </div>
      <div className={styles.form__fieldsGroup__content}>
        <TagSelect
          label={t('taskForm.formTemplate.responsible')}
          name="responsible"
          optionsValue={testDataEmployees}
        />
        <TagSelect
          label={t('taskForm.formTemplate.group')}
          name="group"
          optionsValue={testDataGroup}
        />
      </div>
      <InputField
        label={t('taskForm.formTemplate.comments')}
        name="comments"
        className={styles.form['__single-line']}
      />
      <TagSelect
        label={t('taskForm.formTemplate.signees')}
        name="signees"
        optionsValue={testDataEmployees}
        className={styles.form['__single-line']}
      />
      <div className={styles.form__fieldsGroup__content}>
        <DatePickerField label={t('taskForm.formTemplate.openDate')} name="openDate" />
        <DatePickerField label={t('taskForm.formTemplate.createdDate')} name="createdDate" />
      </div>
      <div className={styles.form__fieldsGroup__content}>
        <TagSelect
          label={t('taskForm.formTemplate.openedBy')}
          name="openedBy"
          optionsValue={testDataEmployees}
        />
        <TagSelect
          label={t('taskForm.formTemplate.createdBy')}
          name="createdBy"
          optionsValue={testDataEmployees}
        />
      </div>
    </Form>
  );
};

export default FormTemplate;
