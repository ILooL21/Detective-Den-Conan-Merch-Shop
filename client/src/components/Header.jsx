import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { Layout, Input, Dropdown, Space } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "../styles/Header.css";

const HeaderComponent = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const { Header } = Layout;

  const items = [
    {
      key: "1",
      label: (
        <a href="/profile" className="dropdown-content">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href="/dashboard" className="dropdown-content">
          Dashboard
        </a>
      ),
    },
    {
      key: "3",
      label: <a>Logout</a>,
      onClick: logoutHandler,
    },
  ];
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "48px",
          backgroundColor: "#000",
          gap: "8px",
        }}
      >
        <a className="promo">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </a>
        <a className="detail-promo" href="/">
          ShopNow
        </a>
      </Header>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderBottom: "2px solid #F5F5F5",
          height: "100px",
          padding: "0 48px",
          gap: "16px",
        }}
      >
        <a className="logo" href="/">
          MERCHANDISE DETECTIVE&apos;S DEN
        </a>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/riddle">Riddle</Link>
          <Link to="/wiki">Wiki</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {userInfo ? (
          <Dropdown
            menu={{
              items:
                userInfo?.role === "user"
                  ? items.filter((item) => item.key != "2")
                  : items,
            }}
            className="menu-user"
            overlayStyle={{
              width: "150px",
            }}
          >
            <div className="menu-login">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {userInfo.name}
                  <DownOutlined style={{ fontSize: "12px" }} />
                </Space>
              </a>
            </div>
          </Dropdown>
        ) : (
          <>
            <div className="menu-register">
              <Link to="/login">Sign In</Link>
            </div>
          </>
        )}
        <Input
          placeholder="What are you looking for?"
          suffix={<SearchOutlined style={{ fontSize: "20px" }} />}
          style={{
            width: "243px",
            height: "38px",
            borderRadius: "5px",
            backgroundColor: "#F5F5F5",
            border: "none",
            padding: "7px 12px 7px 20px",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "18px",
          }}
          onPressEnter={onSearch}
        />
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
          }}
        >
          <HeartOutlined className="icons" />
        </Link>
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
          }}
        >
          <ShoppingCartOutlined className="icons" />
        </Link>
      </Header>
    </Layout>
  );
};
export default HeaderComponent;
