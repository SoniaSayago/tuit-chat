import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  primaryColor: '#8c52ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  logo: 'https://firebasestorage.googleapis.com/v0/b/tuit-5a5ab.appspot.com/o/Logo-tuit.svg?alt=media&token=aa3b29e7-d0dd-4c56-9f77-8ac8933589c8',
  iconfontUrl: '',
};

export default Settings;
