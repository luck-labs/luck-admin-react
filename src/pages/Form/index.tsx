import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
import { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';    如果项目没有对antd、less做任何配置的话，需要加上

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '简单输入框',
      type: 'string',
      required: true,
    },
    select1: {
      title: '单选',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['早', '中', '晚'],
    },
  },
};

const Demo = (props: any) => {
  const [schemaNew, setSchemaNew] = useState<any>(schema);
  const onFinish = (formData: any, errors: any) => {
    console.log('formData:', formData, 'errors', errors);
  };

  useEffect(() => {
    try {
      const schemaStr = localStorage.getItem('schema');
      const schemaObj = JSON.parse(schemaStr);
      console.log('songzc-schemaStr', schemaStr, schemaObj);
      setSchemaNew(schemaObj);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const { form } = props;
  return (
    <PageContainer
      header={{
        title: 'Form 示例',
      }}
    >
      <FormRender form={form} schema={schemaNew} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </PageContainer>
  );
};

export default connectForm(Demo);
