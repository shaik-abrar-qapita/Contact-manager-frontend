import React, { useEffect, useState } from "react";
// import "./App.css";
import Axios from "axios";
import ContactForm from "./ContactForm/ContactForm";
import ContactTable from "./ContactTable/ContactTable";
import { Divider } from "antd";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  async function fetchAllUsers() {
    const users = await Axios.get("http://localhost:5000/api/contacts/all");
    console.log(users);

    setData(users.data);
  }

  return (
    <React.Fragment>
      <ContactForm setData={setData} />
      <Divider />
      <ContactTable data={data} setData={setData} />
    </React.Fragment>
  );
}

export default App;
