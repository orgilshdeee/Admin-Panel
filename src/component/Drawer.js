import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { Form, Input, Button, Row, Col, Drawer } from "antd";
import { userService } from "../services/userService";

export default function DrawerComp(props) {
  const [user, setUser] = useUser();
  const [edit, setEdit] = useState(false);

  // console.log(user);
  function submitHandler(data) {
    data.email = user.email;
    data.token = user.token;
    console.log(data);
    userService
      .editUser(data)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  return (
    <Drawer
      title="Тохиргоо"
      placement="right"
      onClose={() => {
        props.close(false);
      }}
      visible={props.open}
    >
      <Form
        span={12}
        offset={6}
        className="editForm"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Нэр"
          name="user"
          rules={[
            {
              required: true,
              message: "И-мэйл хаяг дутуу байна!",
            },
          ]}
          initialValue={user.userName}
        >
          <Input placeholder="И-мэйл хаягаа оруулна уу." />
        </Form.Item>

        <Form.Item
          label="Нууц үг"
          name="password"
          rules={[
            {
              required: true,
              message: "Нууц үг дутуу байна!",
            },
          ]}
          initialValue=""
        >
          <Input.Password placeholder="Нууц үгээ оруулна уу." />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
