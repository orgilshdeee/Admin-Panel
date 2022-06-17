import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { List, Row, Col, Divider, Pagination } from "antd";
import "../../style/menuStyle/orders.css";
import userEvent from "@testing-library/user-event";
import { useUser } from "../../contexts/UserContext";
import Moment from "react-moment";
export default function Orders() {
  const [order, setOrder] = useOrder();
  const [user, setUser] = useUser();
  const [page, setPage] = useState(1);

  useEffect(() => {
    otherServices
      .getAllOrders({ token: user.token }, page)
      .then((e) => e.json())
      .then((e) => {
        setOrder(e.data.docs);
      });
  }, [page]);
  console.log(order);
  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="order-header">
            <span>Он сар өдөр</span>
            <span>Захиалга#</span>
            <span>Хэрэглэгч</span>
            <span>Захиалга</span>
            <span>Нийт дүн</span>
            <span>Төлбөр</span>
            <span>Утас</span>
            <span>Төлөв</span>
          </div>
        }
        footer={
          <div>
            <Pagination
              defaultCurrent={1}
              total={50}
              onChange={(e) => {
                setPage(e);
              }}
            />
          </div>
        }
        bordered
        dataSource={order}
        renderItem={(item, index) => {
          return (
            <>
              <List.Item className="listItems">
                <Row className="rows">
                  <Col
                    className="cols"
                    span={4}
                    style={{ paddingLeft: "75px" }}
                  >
                    <Moment format="YYYY/MM/DD hh:ss">
                      {item.created_date}
                    </Moment>
                  </Col>
                  <Col className="cols" span={1}>
                    {index <= 10 ? `000${index + 1}` : `00${index + 1}`}
                  </Col>
                  <Col className="cols" span={4}>
                    {item.user_id}
                  </Col>
                  <Col className="cols" span={3}>
                    Оргил
                  </Col>
                  <Col className="cols" span={3}>
                    {item.orderDetails}
                  </Col>
                  <Col className="cols" span={3}>
                    {item.total_price}₮
                  </Col>
                  <Col className="cols" span={3}>
                    {item.payment_type}
                  </Col>
                  <Col className="cols" span={3}>
                    {item.phone}
                  </Col>
                </Row>
              </List.Item>
            </>
          );
        }}
      />
    </div>
  );
}
