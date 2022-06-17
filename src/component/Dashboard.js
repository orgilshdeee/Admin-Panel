import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ControlPanel from "./SideMenu/ControlPanel";
import Orders from "./SideMenu/Orders";
import Invoices from "./SideMenu/Invoices";
import FoodMenu from "./SideMenu/FoodMenu";
import Users from "./SideMenu/Users";
import Deliverymen from "./SideMenu/Deliverymen";
import "antd/dist/antd.css";
import "../style/main.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Space, Layout } from "antd";
import Icons from "../pictures/icons/icons.js";
import { MENU } from "../util/constants";
import { useUser } from "../contexts/UserContext";
import DrawerComp from "./Drawer";
import { OmitProps } from "antd/lib/transfer/ListBody";

export default function Dashboard() {
  const [user, setUser] = useUser();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { Header, Content, Footer, Sider } = Layout;

  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          setOpenDrawer(true);
        }}
        style={{ color: "#f17228" }}
      >
        Тохиргоо
      </Menu.Item>
      <Menu.Item
        key="1"
        onClick={() => {
          setUser(null);
          localStorage.clear();
        }}
        style={{ color: "#f17228" }}
      >
        Гарах
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout style={{ margin: "0" }}>
        <Sider theme="light" className="sider">
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="10"
              icon={<img src={Icons.logo} />}
              style={{ margin: "0 0" }}
            >
              <div className="logo-name">
                <p>Food Delivery</p>
              </div>
            </Menu.Item>
            {MENU.map((e) => {
              return (
                <Menu.Item
                  key={e.id}
                  icon={<img src={Icons[e.page]} />}
                  style={{ margin: "26px 0" }}
                >
                  <span>{e.name}</span>
                  <Link to={`/${e.page}`} />
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="contentLay">
          <Header className="header">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "#f17228", margin: "auto" }}>
                  <img
                    src="/pictures/user.svg"
                    alt=""
                    style={{ display: "flex" }}
                  />
                  Админ
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Routes
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<ControlPanel />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/foods" element={<FoodMenu />} />
              <Route path="/users" element={<Users />} />
              <Route path="/deliveryman" element={<Deliverymen />} />
            </Routes>
          </Content>
          <Footer
            style={{
              textAlign: "right",

              bottom: 0,
              float: "right",
            }}
          >
            <span className="fooder">
              Andy Design ©2022 Created by Andy's Code
            </span>
          </Footer>
        </Layout>
      </Layout>
      <DrawerComp
        open={openDrawer}
        close={() => {
          setOpenDrawer(false);
        }}
      />
    </>
  );
}
