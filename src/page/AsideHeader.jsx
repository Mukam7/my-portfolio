import { Fragment, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider } = Layout;

const AsideHeader = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("Uz");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <Fragment>
      <Layout>
        <aside>
          <Sider
            style={{
              background: "#171923",
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className="demo-logo-vertical" />
            <Menu
              style={{
                background: "#171923",
                height: "100vh",
              }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1" icon={<HomeOutlined className="icon-large" />}>
                <Link to="/">Bosh sahifa</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<CodeOutlined className="icon-large" />}>
                <Link to="/site-code">Kod manbalar</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<i className="fa-solid fa-phone"></i>}>
                <Link to="/contact">Boglanish</Link>
              </Menu.Item>
              <div className="open-button-ant">
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    color: "#fff",
                  }}
                />
              </div>
            </Menu>
          </Sider>
        </aside>
        <Layout>
          <Header className="header-top">
            <div className="container-2">
              <div className="header-top-1">
                <div className="header-top-left">
                  <h2>alphacoder_web</h2>
                </div>
                <div className="header-top-right">
                  <button>
                    <i className="fa-regular fa-sun"></i>
                  </button>
                  <select
                    name="languageSelect"
                    id="languageSelect"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    <option value="Uz">Uz</option>
                    <option value="Ru">Ru</option>
                    <option value="Eng">Eng</option>
                  </select>
                </div>
              </div>
            </div>
          </Header>
          <Layout>
            <Outlet />
          </Layout>
        </Layout>
      </Layout>
      <Layout id="mobile-menu">
        <div className="menu-mobile">
          <div className="mobile-link-icon">
            <Link to="/">
              <HomeOutlined />
            </Link>
            <br />
            <Link to="/">
              <span>Bosh sahifa</span>
            </Link>
          </div>
          <div className="mobile-link-icon">
            <Link to="/site-code">
              <CodeOutlined />
            </Link>
            <br />
            <Link to="/site-code">
              <span>Kod manbalar</span>
            </Link>
          </div>
          <div className="mobile-link-icon">
            <Link to="/contact">
              <i className="fa-solid fa-phone"></i>
            </Link>
            <br />
            <Link to="/contact">
              <span>Boglanish</span>
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default AsideHeader;
