import React, { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { otherServices } from "../../services/otherServices";
import { Divider, List, Row, Col } from "antd";
import Moment from "react-moment";
import { useAllUsers } from "../../contexts/AllUsersContext";
export default function Users() {
  const [user, setUser] = useUser();
  const [allUser, setAllUser] = useAllUsers();
  console.log(user);
  useEffect(() => {
    otherServices
      .getAllUsers({ token: user.token })
      .then((res) => res.json())
      .then((res) => {
        setAllUser(res.data);
      });
  }, []);
  console.log(allUser);
  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="order-header">
            <span>Хэрэглэгч ID</span>
            <span>Нэр</span>
            <span>И-мэйл хаяг</span>
            <span>Хаяг</span>
            <span>Утас</span>
            <span>Бүртгүүлсэн өдөр</span>
          </div>
        }
        footer={<div></div>}
        bordered
        dataSource={allUser}
        renderItem={(item) => {
          return (
            <>
              <List.Item className="listItems">
                <Row className="rows">
                  <Col className="cols" span={4}>
                    {item.role_id}
                  </Col>
                  <Col className="cols" span={4}>
                    {item.name}
                  </Col>
                  <Col className="cols" span={4}>
                    {item.email}
                  </Col>
                  <Col className="cols" span={4}>
                    {item.address}
                  </Col>
                  <Col className="cols" span={4}>
                    {item.phone}
                  </Col>
                  <Col className="cols" span={4}>
                    <Moment format="YYYY/MM/DD">{item.created_date}</Moment>
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
