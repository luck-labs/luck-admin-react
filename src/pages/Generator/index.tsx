import { createPage, getPage } from '@/services/demo/UserController';
import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import { connectForm } from 'form-render';
import Generator from 'fr-generator';
import { useEffect, useRef, useState } from 'react';
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
  const [schemaNew, setSchemaNew] = useState<any>(schema);
  const [isSaving, setIsSaving] = useState(false);
  const generatorRef = useRef<any>();
  // const onFinish = (formData: any, errors: any) => {
  //   console.log('formData:', formData, 'errors', errors);
  // };

  // const { form } = props;

  useEffect(() => {
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
      });
  }, []);

  const handleSchemaSave = () => {
    setIsSaving(true);
    const schemaObj = generatorRef.current.getValue();
    console.log('songzc-handleSchemaSave', generatorRef.current.getValue());
    const schemaStr = JSON.stringify(schemaObj);
    localStorage.setItem('schema', schemaStr);
    createPage({
      config_key: 'short_url',
      config_val: schemaStr,
    })
      .then((res: any) => {
        console.log('songzc-createPage', res);
        if (res?.errno === 0) {
          message.success('保存成功');
        } else {
          message.error(res?.errmsg || '保存失败');
        }
      })
      .catch((e) => {
        console.error('songzc-createPage-catch', e);
        message.error(e?.message || '保存失败');
      })
      .finally(() => setIsSaving(false));
  };

  return (
    <PageContainer
      header={{
        title: '表单设计器',
      }}
    >
      <div style={{ height: '90vh' }}>
        <Generator
          ref={generatorRef}
          defaultValue={schemaNew}
          extraButtons={[
            true,
            true,
            true,
            true,
            { text: '保存', loading: isSaving, onClick: handleSchemaSave },
          ]}
        />
      </div>
    </PageContainer>
  );
};

export default connectForm(Demo);
