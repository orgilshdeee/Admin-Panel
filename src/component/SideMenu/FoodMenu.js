import React, { useEffect, useState } from "react";
import { Divider, List, Row, Col } from "antd";
import { otherServices } from "../../services/otherServices";
import { useFood } from "../../contexts/FoodContext";
import DrawerComp from "../Drawer";
import { useDrawer } from "../../contexts/DrawerContext";

export default function FoodMenu() {
  const [food, setFood] = useFood();
  const [drawer, setDrawer] = useDrawer();
  const [openDrawer, setOpenDrawer] = useState(false);

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
          <div className="order-header">
            <span>#</span>
            <span>Зураг</span>
            <span>Хоолны нэр</span>
            <span>Тайлбар</span>
            <span>Порц</span>
            <span>Үнэ(₮)</span>
            <span>Категори</span>
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
                    span={3}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {index + 1}
                  </Col>
                  <Col className="cols" span={3}>
                    <img
                      src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${item.image}`}
                      style={{ width: "100px", marginLeft: "34px" }}
                    />
                  </Col>
                  <Col
                    className="cols"
                    span={3}
                    style={{
                      marginLeft: "6%",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.name}
                  </Col>
                  <Col
                    className="cols"
                    span={3}
                    style={{
                      marginLeft: "5%",
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
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.portion}
                  </Col>
                  <Col
                    className="cols"
                    span={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "1%",
                    }}
                  >
                    {item.price}
                  </Col>
                  <Col
                    className="cols"
                    span={3}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.category}
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
      />
    </div>
  );
}
