import { Layout } from 'antd';
import './Header.scss'

function Header() {
  return (
    <Layout.Header className="page-header">
      <div className="headerLeft">left</div>
      <div className="headerCenter">center</div>
      <div className="headerRight">right</div>
    </Layout.Header>
  );
}

export default Header;
