import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { Form, Input, Button, Row, Col, Drawer } from "antd";
import { userService } from "../services/userService";
import { useDrawer } from "../contexts/DrawerContext";
import { otherServices } from "../services/otherServices";

export default function DrawerComp(props) {
  const [user, setUser] = useUser();
  const [drawer, setDrawer] = useDrawer();

  function saveInfo(data) {
    data.email = user.email;
    data.token = user.token;
    console.log(data);
    userService
      .editUser(data)
      .then((res) => res.json())
      .then((res) => console.log(res));
    props.close(false);
  }
  function sendFood(data) {
    const temp = {
      category_id: "618b4838d9ba304e7d5c83dd",
      name: "Бууз",
      price: 1800,
      discount: 0,
      portion: 1,
      stock: 10,
      ingredients: "Мах, Гурил",
      status: true,
      sales: false,
      image: "/food/pumpkin_soup.png",
      tumb_img: "1_tumb.png",
      token: user.token,
    };

    console.log(temp);

    otherServices
      .saveFood(temp)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  function updateFood(data) {
    data.category_id = props.data?.category_id;
    data.discount = props.data?.discount;
    data.sales = props.data?.sales;
    data.tumb_img = props.data?.tumb_img;
    data._id = props.data?._id;
    data.image = props.data?.image;
    data.price = parseInt(data.price);
    console.log(data);
    // otherServices
    // .editUser(data);
  }
  switch (drawer) {
    case "edit":
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
            onFinish={saveInfo}
            autoComplete="off"
          >
            <Form.Item
              label="Нэр"
              name="name"
              rules={[
                {
                  required: true,
                  message: "И-мэйл хаяг дутуу байна!",
                },
              ]}
              initialValue={user.name}
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
              label="Утасны дугаар"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Утасны дугаар дутуу байна!",
                },
              ]}
              initialValue={user.phone}
            >
              <Input placeholder="Нууц үгээ оруулна уу." />
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

    case "addFood":
      return (
        <Drawer
          title="Хоол нэмэх"
          placement="right"
          onClose={() => {
            props.close(false);
            setDrawer("edit");
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
            onFinish={sendFood}
            autoComplete="off"
          >
            <Form.Item
              label="Нэр"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Нэр дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Нэр оруулна уу." />
            </Form.Item>

            <Form.Item
              label="Тайлбар"
              name="ingredients"
              rules={[
                {
                  required: true,
                  message: "Орц дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Орц оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Порц"
              name="portion"
              rules={[
                {
                  required: true,
                  message: "Порц дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Нууц үгээ оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Үнэ"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Үнэ дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Үнэ оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Категори"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Категори дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Категори оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Тоо хэмжээ"
              name="stock"
              rules={[
                {
                  required: true,
                  message: "Тоо хэмжээ дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Тоо хэмжээ оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Зураг"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Зураг дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Зураг оруулна уу." />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Нэмэх
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      );
    case "editFood":
      return (
        <Drawer
          title="Хоол нэмэх"
          placement="right"
          onClose={() => {
            props.close(false);
            setDrawer("edit");
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
            onFinish={updateFood}
            autoComplete="off"
          >
            <Form.Item
              label="Нэр"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Нэр дутуу байна!",
                },
              ]}
              initialValue={props.data?.name}
            >
              <Input placeholder="Нэр оруулна уу." />
            </Form.Item>

            <Form.Item
              label="Тайлбар"
              name="ingredients"
              rules={[
                {
                  required: true,
                  message: "Орц дутуу байна!",
                },
              ]}
              initialValue={props.data?.ingredients}
            >
              <Input placeholder="Орц оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Порц"
              name="portion"
              rules={[
                {
                  required: true,
                  message: "Порц дутуу байна!",
                },
              ]}
              initialValue={props.data?.portion}
            >
              <Input placeholder="Нууц үгээ оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Үнэ"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Үнэ дутуу байна!",
                },
              ]}
              initialValue={props.data?.price}
            >
              <Input placeholder="Үнэ оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Категори"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Категори дутуу байна!",
                },
              ]}
              initialValue={props.data?.category}
            >
              <Input placeholder="Категори оруулна уу." />
            </Form.Item>
            <Form.Item
              label="Тоо хэмжээ"
              name="stock"
              rules={[
                {
                  required: true,
                  message: "Тоо хэмжээ дутуу байна!",
                },
              ]}
              initialValue={props.data?.stock}
            >
              <Input placeholder="Тоо хэмжээ оруулна уу." />
            </Form.Item>
            {/* <Form.Item
              label="Зураг"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Зураг дутуу байна!",
                },
              ]}
            >
              <Input placeholder="Зураг оруулна уу." />
            </Form.Item> */}

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
}
