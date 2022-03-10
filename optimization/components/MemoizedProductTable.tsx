import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Product } from 'types';
import MemoizedFormInput from "components/MemoizedFormInput";

interface MemoizedProductsProps {
  prefix: string;
  products: Product[];
}

function MemoizedProductTable({
  prefix,
  products,
}: MemoizedProductsProps) {
  const columns: ColumnsType<Product> = [
    {
      title: '제품명',
      dataIndex: 'name',
      key: 'name',
      render: (value, record, index) => (
        <MemoizedFormInput
          name={`${prefix}[${index}].name`}
          type="string"
          required={true}
        />
      )
    },
    {
      title: 'UID',
      dataIndex: 'uid',
      key: 'uid',
      render: (value) => value
    },
    {
      title: '총액',
      dataIndex: 'amount',
      key: 'amount',
      render: (value, record, index) => (
        <MemoizedFormInput
          name={`${prefix}[${index}].amount`}
          type="number"
          required={true}
        />
      )
    },
    {
      title: '부가세',
      dataIndex: 'vat',
      key: 'vat',
      render: (value, record, index) => (
        <MemoizedFormInput
          name={`${prefix}[${index}].vat`}
          type="number"
          required={true}
        />
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

export default MemoizedProductTable;
