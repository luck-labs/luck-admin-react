import { PageContainer } from '@ant-design/pro-components';
import { connectForm } from 'form-render';
import Generator from 'fr-generator';
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

const Demo = () => {
  // const onFinish = (formData: any, errors: any) => {
  //   console.log('formData:', formData, 'errors', errors);
  // };

  // const { form } = props;

  const handleSchemaChange = (schema: any) => {
    console.log('songzc-schema', JSON.stringify(schema.properties));
    localStorage.setItem('schema', JSON.stringify(schema.properties));
  };
  return (
    <PageContainer
      header={{
        title: '表单设计器',
      }}
    >
      <div style={{ height: '90vh' }}>
        <Generator defaultValue={schema} onSchemaChange={handleSchemaChange} />
      </div>
    </PageContainer>
  );
};

export default connectForm(Demo);
