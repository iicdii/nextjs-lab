import {Formik, Form, FormikValues, FormikProps } from 'formik';
import * as yup from 'yup';
import { ProductVoucher } from 'types';
import { Button, Space } from 'antd';
import MemoizedProductTable from 'components/MemoizedProductTable';
import MemoizedFormInput from "components/MemoizedFormInput";

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

function MemoizedProductVoucherForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        alert('submit');
      }}
    >
      {(formik: FormikProps<FormikValues>) => {
        const { values, isSubmitting, } = formik;

        return (
          <Form className="ant-form ant-form-horizontal">
            <Space direction="vertical">
              <MemoizedFormInput
                name="title"
                label="제목"
                type="string"
                required={true}
              />
              <MemoizedProductTable
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

export default MemoizedProductVoucherForm;
