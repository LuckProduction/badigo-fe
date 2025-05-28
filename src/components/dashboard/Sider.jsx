import { dashboardLink } from '@/data/link';
import { Drawer, Grid, Menu, Tooltip } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardSider = ({ collapsed, onCloseMenu }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const breakpoints = Grid.useBreakpoint();
  const isDesktop = breakpoints.lg || breakpoints.xl || breakpoints.xxl;

  const menuItems = dashboardLink.map(({ label, children, icon: Icon }) => ({
    key: label,
    label: (
      <Tooltip title={label} placement="right" color="blue">
        <span>{label}</span>
      </Tooltip>
    ),
    icon: (
      <Tooltip title={label} placement="right" color="blue">
        <Icon />
      </Tooltip>
    ),
    children: children.map(({ path, label }) => ({
      key: path,
      label: (
        <Tooltip title={label} placement="right" color="blue">
          <span>{label}</span>
        </Tooltip>
      ),
      onClick: () => navigate(path)
    }))
  }));

  return isDesktop ? (
    <Sider theme="light" className="p-4" width={230} collapsed={collapsed}>
      <Link to="/" />
      <Menu className="w-full !border-none font-semibold" theme="light" mode="inline" defaultSelectedKeys={[pathname]} items={menuItems} />
    </Sider>
  ) : (
    <Drawer styles={{ body: { padding: 10 } }} placement="left" width={250} open={!collapsed} onClose={onCloseMenu}>
      <Menu className="w-full !border-none font-semibold" theme="light" mode="inline" defaultSelectedKeys={[pathname]} items={menuItems} />
    </Drawer>
  );
};

export default DashboardSider;

DashboardSider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired
};
