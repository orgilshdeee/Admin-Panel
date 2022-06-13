import { Button, Drawer } from "antd";
import { useUser } from "../contexts/UserContext";

export default function DrawerComp(props) {
  const [user, setUser] = useUser();
  console.log(user);
  return (
    <Drawer
      title="Тохиргоо"
      placement="right"
      onClose={() => {
        props.close(false);
      }}
      visible={props.open}
    >
      <p>{user.email}</p>
      <p></p>
      <p>Some contents...</p>
      <Button>Хадгалах</Button>
    </Drawer>
  );
}
