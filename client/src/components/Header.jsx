import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { Layout, Input, Dropdown, Space } from "antd";
import { SearchOutlined, ShoppingCartOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import "../styles/Header.css";

const HeaderComponent = () => {
  const [searchParams] = useSearchParams();
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

  const onSearch = (value) => {
    if (searchParams.has("category")) {
      navigate(`/katalog?search=${value}&category=${searchParams.get("category")}`);
    } else {
      navigate(`/katalog?search=${value}`);
    }
  };

  const { Header } = Layout;

  const items = [
    {
      key: "1",
      label: (
        <a
          href="/profile"
          className="dropdown-content">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href="/dashboard"
          className="dropdown-content">
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
      <div className="container-header">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "36px",
            backgroundColor: "#000",
            gap: "8px",
          }}>
          <a className="promo">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</a>
          <a
            className="detail-promo"
            href="/">
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
            width: "100%",
            height: "100px",
            padding: "0 48px",
            gap: "16px",
          }}>
          <a
            className="logo"
            href="/">
            MERCHANDISE DETECTIVE&apos;S DEN
          </a>
          <Input
            placeholder="What are you looking for?"
            suffix={<SearchOutlined style={{ fontSize: "20px" }} />}
            onPressEnter={(e) => onSearch(e.target.value)}
            className="search-bar-header"
          />
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/wiki">Wiki</Link>
            <Link to="/riddle">Riddle</Link>
            <Link to="/contact">Contact</Link>
          </div>
          {userInfo ? (
            <Dropdown
              menu={{
                items: userInfo?.role === "user" ? items.filter((item) => item.key != "2") : items,
              }}
              className="menu-user"
              overlayStyle={{
                width: "150px",
              }}>
              <div className="menu-login">
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <UserOutlined />
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
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
            }}
            to={userInfo ? `/cart?userid=${userInfo._id}` : "/login"}>
            <ShoppingCartOutlined className="icons" />
          </Link>
        </Header>
      </div>
    </Layout>
  );
};
export default HeaderComponent;
