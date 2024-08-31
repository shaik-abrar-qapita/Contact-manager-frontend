import Axios from "axios";
import { useEffect, useState } from "react";
import Contact from "../Contacts/Contact";
import { Button, message, Popconfirm, Table } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

const ContactTable = ({ data, setData }) => {
  const coulmns = [
    {
      title: "RowHead",
      dataIndex: "key",
      rowScope: "row",
    },
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "3",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "4",
      title: "Actions",
      dataIndex: "action",
    },
  ];

  const confirm = async ({ id }) => {
    console.log(id);

    const delet = await Axios.delete(
      `http://localhost:5000/api/contacts/del/${id}`
    );
    console.log(delet);

    const updatedData = data.filter((contact) => contact._id !== id);

    setData(updatedData);

    message.success("Contact deleted Successfully");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const DeleteIcon = (id) => {
    return (
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this Contact?"
        onConfirm={() => confirm(id)}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <DeleteTwoTone />
      </Popconfirm>
    );
  };

  const dataSource = data.map((contact, index) => {
    return {
      key: index,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      action: <DeleteIcon id={contact._id} />,
    };
  });

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={coulmns}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default ContactTable;
