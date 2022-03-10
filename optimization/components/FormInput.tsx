import {Field, getIn} from "formik";
import {FieldProps} from "formik/dist/Field";
import BasicField from "components/BasicField";
import {Input, InputNumber} from "antd";

interface FormInputProps {
  name: string;
  label?: string;
  type: 'string' | 'number';
  required: boolean;
}

function FormInput({ name, label, type, required = false, }: FormInputProps) {
  return (
    <Field name={name}>
      {({field, form}: FieldProps) => {
        const { errors, touched, values, setFieldValue, setFieldTouched } = form;

        return (
          <BasicField
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
          </BasicField>
        );
      }}
    </Field>
  );
}

export default FormInput;
