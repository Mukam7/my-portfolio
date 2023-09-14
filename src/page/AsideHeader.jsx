import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CodeOutlined,
  PhoneOutlined,
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
            <Menu.Item key="3" icon={<PhoneOutlined className="icon-large" />}>
              <Link to="/contact">Boglanish</Link>
            </Menu.Item>
            <div className="open-button-ant">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
  );
};

export default AsideHeader;
