import {Formik, Form, Field, FormikValues, FormikProps, getIn} from 'formik';
import * as yup from 'yup';
import { ProductVoucher } from 'types';
import { Button, Input, Space } from 'antd';
import ProductTable from 'components/ProductTable';
import BasicField from 'components/BasicField';
import { FieldProps } from 'formik/dist/Field';

const initialValues: ProductVoucher = {
  title: '',
  products: new Array(50).fill({}).map((n, index) => ({
    name: `name-${index}`,
    uid: `${index}`,
    amount: 0,
    vat: 0,
  })),
};

const schema = yup.object({
  title: yup.string().required(),
  products: yup.array(
    yup.object({
      name: yup.string(),
      uid: yup.string(),
      amount: yup.number(),
      vat: yup.number(),
    }).required(),
  ).required().min(1),
});

function ProductVoucherForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        alert('submit');
      }}
    >
      {(formik: FormikProps<FormikValues>) => {
        const {
          setFieldValue,
          setFieldTouched,
          values,
          isSubmitting,
          errors,
          touched,
        } = formik;

        return (
          <Form className="ant-form ant-form-horizontal">
            <Space direction="vertical">
              <Field name="title">
                {({ field }: FieldProps) => {
                  return (
                    <BasicField
                      label={field.name}
                      name={field.name}
                      required={true}
                      error={getIn(errors, field.name, '')}
                      touched={getIn(touched, field.name, false)}
                    >
                      <Input
                        value={values[field.name]}
                        onChange={(e) =>
                          setFieldValue(field.name, e.target.value)
                        }
                        onBlur={() => setFieldTouched(field.name, true)}
                      />
                    </BasicField>
                  );
                }}
              </Field>
              <ProductTable
                prefix="products"
                products={values.products}
              />
              <Button type="primary" htmlType="submit" loading={isSubmitting}>
                저장
              </Button>
            </Space>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProductVoucherForm;
