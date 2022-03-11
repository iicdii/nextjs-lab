import React from 'react';
import {Field, getIn} from "formik";
import {FieldProps} from "formik/dist/Field";
import MemoizedBasicField from "components/MemoizedBasicField";
import {Input, InputNumber} from "antd";

interface MemoizedFormInputProps {
  name: string;
  label?: string;
  type: 'string' | 'number';
  required: boolean;
}

function MemoizedFormInput({ name, label, type, required = false, }: MemoizedFormInputProps) {
  return (
    <Field name={name}>
      {({field, form}: FieldProps) => {
        const { errors, touched, values, setFieldValue, setFieldTouched } = form;

        return (
          <MemoizedBasicField
            name={field.name}
            label={label}
            required={required}
            error={getIn(errors, name, '')}
            touched={getIn(touched, name, false)}
          >
            {(() => {
              switch (type) {
                case 'string':
                  return (
                    <Input
                      value={getIn(values, name, '')}
                      onChange={e => setFieldValue(name, e.target.value)}
                      onBlur={() => setFieldTouched(name, true)}
                    />
                  );
                case 'number':
                  return (
                    <InputNumber
                      value={getIn(values, name, 0)}
                      onChange={value => setFieldValue(name, value)}
                      onBlur={() => setFieldTouched(name, true)}
                    />
                  );
                default:
                  return <div />;
              }
            })()}
          </MemoizedBasicField>
        );
      }}
    </Field>
  );
}

export default React.memo(MemoizedFormInput);
