import React, { useEffect, useState } from "react";
import { Divider, List, Row, Col, Menu, Dropdown, Space } from "antd";
import { otherServices } from "../../services/otherServices";
import { useFood } from "../../contexts/FoodContext";
import DrawerComp from "../Drawer";
import { useDrawer } from "../../contexts/DrawerContext";
import "../../style/menuStyle/foods.css";
import userEvent from "@testing-library/user-event";
import { useUser } from "../../contexts/UserContext";

export default function FoodMenu() {
  const [food, setFood] = useFood();
  const [user, setUser] = useUser();
  const [drawer, setDrawer] = useDrawer();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [data, setData] = useState();
  function deleteFood() {
    otherServices
      .deleteFood({ token: user.token }, data._id)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          setDrawer("editFood");
          setOpenDrawer(true);
        }}
        style={{ color: "#f17228" }}
      >
        Засах
      </Menu.Item>
      <Menu.Item key="1" onClick={deleteFood} style={{ color: "#f17228" }}>
        Устгах
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    otherServices
      .getAllFood()
      .then((res) => res.json())
      .then((res) => {
        setFood(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <Divider orientation="left">
        <div style={{ display: "flex", justifyContent: "left" }}>
          Хоолны Цэс
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input placeholder="хайх"></input>
          <button
            onClick={() => {
              setDrawer("addFood");
              setOpenDrawer(true);
            }}
            style={{ marginLeft: "900px" }}
          >
            Хоол нэмэх
          </button>
        </div>
      </Divider>
      <List
        header={
          <div className="food-header">
            <span>#</span>
            <span>Зураг</span>
            <span>Хоолны нэр</span>
            <span>Тайлбар</span>
            <span>Порц</span>
            <span>Үнэ(₮)</span>
            <span>Категори</span>
            <span>kebab</span>
          </div>
        }
        footer={<div></div>}
        bordered
        dataSource={food}
        renderItem={(item, index) => {
          return (
            <>
              <List.Item className="listItems">
                <Row className="rows">
                  <Col
                    className="cols"
                    span={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                      paddingRight: "44px",
                    }}
                  >
                    {index + 1}
                  </Col>
                  <Col className="cols" span={2}>
                    <img
                      src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${item.image}`}
                      style={{
                        width: "100px",
                      }}
                    />
                  </Col>
                  <Col
                    className="cols"
                    span={3}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                      paddingRight: "45px",
                    }}
                  >
                    {item.name}
                  </Col>
                  <Col
                    className="cols"
                    span={3}
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.ingredients}
                  </Col>
                  <Col
                    className="cols"
                    span={2}
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.portion}
                  </Col>
                  <Col
                    className="cols"
                    span={2}
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.price}
                  </Col>
                  <Col
                    className="cols"
                    span={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                      paddingRight: "40px",
                    }}
                  >
                    {item.category}
                  </Col>
                  <Col
                    span={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <a
                        onClick={() => {
                          setData(item);
                        }}
                      >
                        <Space id="outer-kebab">
                          <span className="kebab"></span>
                          <span className="kebab"></span>
                          <span className="kebab"></span>
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                </Row>
              </List.Item>
            </>
          );
        }}
      />
      <DrawerComp
        open={openDrawer}
        close={() => {
          setOpenDrawer(false);
        }}
        data={data}
        test="this is index"
      />
    </div>
  );
}
