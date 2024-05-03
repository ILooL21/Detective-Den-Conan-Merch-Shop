import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { useCreateSupportMutation } from "../slices/supportApiSlice";
import { toast } from "react-toastify";
import "../styles/Contact.css";

const ContactScreen = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [createSupport, { isLoading }] = useCreateSupportMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createSupport({ email, subject, message });
      toast.success("Message sent successfully, wait for a reply from the admin via email");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

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
                <PhoneOutlined className="icon-phone" />
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
                <MailOutlined className="icon-mail" />
              </a>
              <h2>Write To US</h2>
            </div>
            <div className="menu-contact-content">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <Form className="container-form-contact">
            <div className="container-form-contact-up">
              <Form.Group
                className="form-contact"
                controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-contact-input"></Form.Control>
              </Form.Group>
              <Form.Group className="form-contact">
                <Form.Control
                  type="text"
                  placeholder="Enter Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-contact-input"></Form.Control>
              </Form.Group>
            </div>

            <div className="form-contact">
              <textarea
                name="message"
                id="message"
                type="message"
                cols="30"
                rows="10"
                className="form-contact-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"></textarea>
            </div>
            <div className="container-button-contact">
              <button
                type="submit"
                className="button-contact-save"
                onClick={submitHandler}>
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
