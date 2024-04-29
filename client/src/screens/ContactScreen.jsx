import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Form } from "react-bootstrap";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import "../styles/Contact.css";

const ContactScreen = () => {
  const [, { isLoading }] = useUpdateUserMutation();
  const items = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  function itemRender(currentRoute, params, items, paths) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? <span>{currentRoute.title}</span> : <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>;
  }
  return (
    <>
      <div className="container-contact">
      <div className="container-contact-header">
          <Breadcrumb
            className="breadcrumb-contact"
            itemRender={itemRender}
            items={items}
          />
      </div>
        <div className="container-menu-form-contact">
          <div className="menu-contact">
            <div className="menu-contact-header">
              <a>
                <PhoneOutlined className="icon-phone"/>
              </a>
              <h2>Call To Us</h2>
            </div>
            <div className="menu-contact-content">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div className="menu-contact-header">
              <a>
                <MailOutlined className="icon-mail"/>
              </a>
              <h2>Write To US</h2>
            </div>
            <div className="menu-contact-content">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <Form
            className="container-form-contact">
              <div className="container-form-contact-up">
                <Form.Group
                  className="form-contact"
                  controlId="name">
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    // value={name}
                    className="form-contact-input"></Form.Control>
                </Form.Group>
                <Form.Group
                  className="form-contact"
                  controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    // value={email}
                    className="form-contact-input"></Form.Control>
                </Form.Group>
                <Form.Group
                  className="form-contact"
                  controlId="phone">
                  <Form.Control
                    type="phone"
                    placeholder="Enter phone"
                    // value={phone}
                    className="form-contact-input"></Form.Control>
                </Form.Group>
              </div>
              <div className="form-contact">
                <textarea name="message" id="message" type="message" cols="30" rows="10" className="form-contact-input" placeholder="Enter message"></textarea>
              </div>
            <div className="container-button-contact">
              <button
                type="submit"
                className="button-contact-save">
                Send Message
              </button>
            </div>

            {isLoading && <Loader />}
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactScreen;
