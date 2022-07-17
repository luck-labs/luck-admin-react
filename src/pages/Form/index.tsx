import { getPage } from '@/services/demo/UserController';
import { PageContainer } from '@ant-design/pro-components';
import { Button, message } from 'antd';
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
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (formData: any, errors: any) => {
    console.log('formData:', formData, 'errors', errors);
  };

  useEffect(() => {
    setIsLoading(true);
    getPage({ config_key: 'short_url' })
      .then((res: any) => {
        console.log('songzc-getPage', res);
        if (res?.errno === 0) {
          message.success('获取界面配置成功');
          // console.log('songzc-getPage', res?.data?.config_val);
          try {
            const schemaObj = JSON.parse(res?.data?.config_val);
            setSchemaNew(schemaObj);
          } catch (error) {
            console.error(error);
          }
        } else {
          message.error(res?.errmsg || '获取失败');
        }
      })
      .catch((e) => {
        console.error('songzc-createPage-catch', e);
        message.error(e?.message || '保存失败');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const { form } = props;
  return (
    <PageContainer
      header={{
        title: 'Form 示例',
      }}
    >
      {isLoading ? (
        '加载中...'
      ) : (
        <FormRender form={form} schema={schemaNew} onFinish={onFinish} />
      )}

      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </PageContainer>
  );
};

export default connectForm(Demo);
