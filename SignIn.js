import React, { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import { Logindata } from "../../Services/Services";
import { toast } from "react-toastify";
import Config from "../../Common/Config";
import { Loader } from "../../Components/Loader/Loader";

const SignIn = () => {
  var base64 = require("base-64");
  var utf8 = require("utf8");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  
  const validation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (login.email && validation.test(login.email) === false) {
      toast.error("Please enter valid Email", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setLoader(true);

    let formData = new FormData();
    formData.append("email", login.email);
    formData.append("pass", login.pass);
    console.log(login.email);
    console.log(login.pass);
    const apiResponse = await Logindata(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      sessionStorage.setItem("productLogin", true);
      let result = apiResponse.data;
      let userData = JSON.stringify(result);
      let bytes = utf8.encode(userData);
      let encodedUserData = base64.encode(bytes);
      localStorage.setItem("userdata", encodedUserData);
      setLoader(false);
      window.location.href = Config.BASE_URL + "/userlist";
    } else {
      setLoader(false);
      toast.error("Your Username or Password is incorrect.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // const handleValidSubmit = () => {
  //   setLoader(true);
  //   navigate("/userlist");
  //   sessionStorage.setItem("productLogin", true);
  //   sessionStorage.setItem("authUser", true);
  //   localStorage.setItem("authUser", true);
  // };

  useEffect(() => {
    let auth = sessionStorage.getItem("productLogin");
    if (auth) {
      navigate("/userlist");
    }
    document.title = "Sign in to Runrz";
  });
  return (
    <>
      {loader && <Loader />}
      <section className={styles.auth_section}>
        <div className={styles.auth_content}>
          <img src={logo} className={styles.logo} alt="Runrz" />
          <p className={styles.product_name}>Sign in to Runrz</p>
          <form onSubmit={handlesubmit}>
            <div className={styles.form_control}>
              <label htmlFor="">UserName</label>
              <input
                type="email"
                onChange={(e) => handleChange(e)}
                name="email"
                value={login.email}
                placeholder="User Name"
                required
              />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={(e) => handleChange(e)}
                name="pass"
                value={login.pass}
                placeholder="Password"
                required
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
