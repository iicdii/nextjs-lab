import React from 'react';
import { Form } from 'antd';
import { getIn } from 'formik';
import isEqual from 'react-fast-compare';

interface MemoizedBasicFieldProps {
  label?: string;
  name: string;
  required?: boolean;
  error?: any;
  touched?: boolean;
  style?: object;
  labelCol?: object;
  wrapperCol?: object;
  children: React.ReactElement;
}

function MemoizedBasicField({
  label,
  name,
  required = false,
  error,
  touched = false,
  style,
  labelCol,
  wrapperCol,
  children,
}: MemoizedBasicFieldProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      required={required}
      hasFeedback={!!error}
      validateStatus={(error && touched && 'error') || ''}
      help={touched && error}
      {...(labelCol && { labelCol })}
      {...(wrapperCol && { wrapperCol })}
      {...(style && { style })}
    >
      <>
        {React.cloneElement(children, {
          id: name,
        })}
      </>
    </Form.Item>
  );
}

export default React.memo(
  MemoizedBasicField,
  (prevProps, nextProps) => {
    const name = nextProps.name || prevProps.name;
    const prevError = getIn(prevProps.error, name);
    const nextError = getIn(nextProps.error, name);

    if (prevError !== nextError) return false;

    const prevTouched = getIn(prevProps.touched, name);
    const nextTouched = getIn(nextProps.touched, name);

    if (prevTouched !== nextTouched) return false;

    // check diff primitive props
    ['label', 'name', 'required'].forEach(key => {
      const prevProp = getIn(prevProps, key);
      const nextProp = getIn(nextProps, key);

      if (prevProp !== nextProp) return false;
    });

    // check diff object props
    ['style', 'labelCol', 'wrapperCol'].forEach(key => {
      const prevProp = getIn(prevProps, key);
      const nextProp = getIn(nextProps, key);

      if (!isEqual(prevProp, nextProp)) return false;
    });

    return true;
  }
);
