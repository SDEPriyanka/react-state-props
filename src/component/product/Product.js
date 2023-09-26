import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Productdetails from "./Productdetails";

function Product() {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

  const [user, seUser] = useState([]);
  useEffect(() => {
    axios.get(apiEndpoint)
    .then((res) => {
      seUser(res.data)
    })
    .catch((err) => {
      console.log("error",err)
    })
  },[]);

  return (
    <div>
      <h1>Product</h1>
      <Productdetails prodcutTitle = "Prodcut deatils"   user = {user} />
    </div>
  );
}

export default Product;
