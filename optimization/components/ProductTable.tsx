import { Table, Input, InputNumber } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Product } from 'types';
import BasicField from "components/BasicField";
import { getIn, Field, } from 'formik';
import {FieldProps} from "formik/dist/Field";

interface ProductsProps {
  prefix: string;
  products: Product[];
}

function ProductTable({
  prefix,
  products,
}: ProductsProps) {
  const columns: ColumnsType<Product> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (value, record, index) => (
        <Field name="name">
          {({field, form}: FieldProps) => {
            const { errors, touched, setFieldValue, setFieldTouched } = form;
            const key = `${prefix}[${index}]${field.name}`;

            return (
              <BasicField
                name={field.name}
                required={true}
                error={getIn(errors, key, '')}
                touched={getIn(touched, key, false)}
              >
                <Input
                  value={value}
                  onChange={e => setFieldValue(key, e.target.value)}
                  onBlur={() => setFieldTouched(key, true)}
                />
              </BasicField>
            );
          }}
        </Field>
      )
    },
    {
      title: 'Uid',
      dataIndex: 'uid',
      key: 'uid',
      render: (value, record, index) => (
        <Field name="uid">
          {({field, form}: FieldProps) => {
            const { errors, touched, setFieldValue, setFieldTouched } = form;
            const key = `${prefix}[${index}]${field.name}`;

            return (
              <BasicField
                name={field.name}
                required={true}
                error={getIn(errors, key, '')}
                touched={getIn(touched, key, false)}
              >
                <Input
                  value={value}
                  onChange={e => setFieldValue(key, e.target.value)}
                  onBlur={() => setFieldTouched(key, true)}
                />
              </BasicField>
            );
          }}
        </Field>
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (value, record, index) => (
        <Field name="amount">
          {({field, form}: FieldProps) => {
            const { errors, touched, setFieldValue, setFieldTouched } = form;
            const key = `${prefix}[${index}]${field.name}`;

            return (
              <BasicField
                name={field.name}
                required={true}
                error={getIn(errors, key, '')}
                touched={getIn(touched, key, false)}
              >
                <InputNumber
                  value={value}
                  onChange={value => setFieldValue(key, value)}
                  onBlur={() => setFieldTouched(key, true)}
                />
              </BasicField>
            );
          }}
        </Field>
      )
    },
    {
      title: 'Vat',
      dataIndex: 'vat',
      key: 'vat',
      render: (value, record, index) => (
        <Field name="vat">
          {({field, form}: FieldProps) => {
            const { errors, touched, setFieldValue, setFieldTouched } = form;
            const key = `${prefix}[${index}]${field.name}`;

            return (
              <BasicField
                name={field.name}
                required={true}
                error={getIn(errors, key, '')}
                touched={getIn(touched, key, false)}
              >
                <InputNumber
                  value={value}
                  onChange={value => setFieldValue(key, value)}
                  onBlur={() => setFieldTouched(key, true)}
                />
              </BasicField>
            );
          }}
        </Field>
      )
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="uid"
      pagination={false}
    />
  );
}

export default ProductTable;
