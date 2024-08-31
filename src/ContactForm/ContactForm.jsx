import { Button, Form, Input, message } from "antd";
import Axios from "axios";
import React from "react";
import "./ContactForm.css";

const ContactForm = ({ setData }) => {
  const [form] = Form.useForm();

  async function onFinish(values) {
    console.log("form submit", values);
    const add = await Axios.post(
      "http://localhost:5000/api/contacts/add",
      values
    );
    console.log("result - ", add);
    setData((data) => [...data, add.data]);
    form.resetFields();
    message.success("Contact added successfully!");
  }

  return (
    <div className="form">
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
