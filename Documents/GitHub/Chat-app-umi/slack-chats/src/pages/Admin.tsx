import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

export default (): React.ReactNode => {
  const intl = useIntl();
  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'Welcome! 👋 Is good see you again... 🥳',
      })}
    >
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Connect with your friends...',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> Made with <HeartTwoTone twoToneColor="#eb2f96" /> by Sonia & Andrea
        </Typography.Title>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Have a question, please contact us {' '}
        <a href="https://github.com/SoniaSayago/tuit-chat" target="_blank" rel="noopener noreferrer">
          tuit-chat
        </a>
        。
      </p>
    </PageHeaderWrapper>
  );
};
