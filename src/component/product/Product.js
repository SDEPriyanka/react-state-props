import React from "react";
import { useEffect, useState , useContext } from "react";
import axios from "axios";
import Productdetails from "./Productdetails";
import userContext from "../../Context/Context";
import styles from '../Button.module.css'; // Import the CSS module
import './Product.css';

 
function Product() {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/users";
  const { count, incrementCount, isAuthenticated, login, logout }  = useContext(userContext);
  const [user, seUser] = useState([]);
  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        seUser(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
     
      <button onClick={incrementCount}>Increment</button>
      <button className={styles.button}>Click me</button>
      <p>User is {isAuthenticated ? 'authenticated' : 'not authenticated'}</p>
      <button className="btn" onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      <userContext.Consumer>
        {({count}) => {
          return (
            <>
              <h1>Hi, {count}</h1>
            </>
          );
        }}
      </userContext.Consumer>
      <Productdetails prodcutTitle="Prodcut deatils" user={user} />
    </div>
  );
}

export default Product;
