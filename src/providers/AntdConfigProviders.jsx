import { useStyle } from '@/hooks';
import { ConfigProvider as StyleProvider } from 'antd';
import PropTypes from 'prop-types';

export default function AntdConfigProviders({ children }) {
  const { styles } = useStyle();
  return (
    <StyleProvider
      button={{
        className: styles.customButton
      }}
      drawer={{
        padding: 0
      }}
      theme={{
        token: {
          colorPrimary: '#2A00FF',
          fontFamily: 'Exo2'
        },
        components: {
          Typography: {
            fontFamily: 'Bricolage Grotesque'
          }
        },
      }}
      typography={{
        fontFamilyCode: 'Bricolage Grotesque'
      }}
    >
      {children}
    </StyleProvider>
  );
}
AntdConfigProviders.propTypes = {
  children: PropTypes.node.isRequired
};
