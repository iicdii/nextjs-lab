import React from 'react';
import { Form } from 'antd';

interface BasicFieldProps {
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

function BasicField({
  label,
  name,
  required = false,
  error,
  touched = false,
  style,
  labelCol,
  wrapperCol,
  children,
}: BasicFieldProps) {
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

export default BasicField;
