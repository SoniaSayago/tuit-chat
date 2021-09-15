import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Produced by Sonia Sayago & Andrea Peñaranda',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Andrea Peñaranda',
          title: <GithubOutlined />,
          href: 'https://github.com/andy164',
          blankTarget: true,
        },
        {
          key: 'Sonia Sayago',
          title: <GithubOutlined />,
          href: 'https://github.com/SoniaSayago',
          blankTarget: true,
        },
      ]}
    />
  );
};
