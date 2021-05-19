import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiAtSign, FiCreditCard } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import firebase from "../firebase_config";
import { toast } from "react-toastify";
import BG_5 from "../assets/images/bg_5.svg";
const Register = (props) => {
  const [rollno, setRollno] = useState("");
  const [oldRollno, setOldRollno] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, changeError] = useState("");
  // console.log("props history ", props.history);
  useEffect(() => {
    if (firebase.auth().currentUser)
      setEmail(firebase.auth().currentUser.email);
  }, []);
  useEffect(() => {
    changeError("");
  }, [email, rollno, oldRollno]);

  const loginHandler = () => {
    localStorage.removeItem("token_collegesaathi");
    firebase.auth().signOut();
  };

  const registerHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/register", {
        uid: firebase.auth().currentUser.uid,
        email,
        rollno,
        oldRollno,
      });

      // console.log("DAta in register", data);
      let token = "Bearer " + data.token;
      localStorage.setItem("token_collegesaathi", token);
      props.history.push("/");
      window.location.reload();
      setLoading(false);
    } catch (er) {
      // console.log(er.response);
      if (er.response && er.response.data) {
        let message = er.response.data.message;
        if (message === "ALREADY_REGISTERED") {
          changeError("Rollno already registered!");
        }
      }
      setLoading(false);
    }
  };

  return loading ? (
    <Loading loadingText="Registering User..." />
  ) : (
    <div>
      <Header title="Register" />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-5/6  bg-gray-700 rounded">
        <section className="flex flex-col items-center p-4 rounded lg:w-1/2">
          <img src={BG_5} />
          <h1>Making your college life easier</h1>
        </section>
        <section className="flex flex-col items-center p-4 rounded lg:w-1/2">
          <div className="flex flex-col items-center w-full">
            <p className="mb-12 mt-12 font-bold text-md">
              Enter the following details
            </p>
            <div className="flex flex-row items-center justify-between bg-white mb-2 rounded-3xl px-2 ">
              <FiAtSign size="30" className="m-2" color="#ffc404" />
              <input
                value={email}
                placeholder="Email"
                className="text-black text-sm lg:w-72 md:w-64 bg-white"
                disabled
              />
            </div>
            <div className="flex flex-row items-center justify-between bg-white mb-2 rounded-3xl px-2 ">
              <FaRegAddressCard size="30" className="m-2" color="#ffc404" />
              <input
                value={rollno}
                maxLength={11}
                onChange={(e) => setRollno(e.target.value)}
                placeholder="Roll Number"
                className="text-black text-sm lg:w-72 md:w-64"
              />
            </div>

            <div className="flex flex-row items-center justify-between bg-white mb-2 rounded-3xl px-2 ">
              <FaRegAddressCard size="30" className="m-2" color="#ffc404" />
              <input
                value={oldRollno}
                maxLength={11}
                onChange={(e) => setOldRollno(e.target.value)}
                placeholder="Old Roll Number**"
                className="text-black text-sm lg:w-72 md:w-64"
              />
            </div>
            {error ? (
              <p className="text-xs mb-4 text-red-500 font-semibold">{error}</p>
            ) : null}
            <p className="text-xs mb-4">
              **Old Roll Number is only for Upgraded Students
            </p>

            <button
              className="bg-yellow-400 text-black mb-1 rounded-3xl w-11/12 lg:w-4/6  p-2"
              onClick={registerHandler}
            >
              Register
            </button>
            <p className="text-xs mt-4">
              Already User ?{" "}
              <span className="font-bold cursor-pointer" onClick={loginHandler}>
                Login{" "}
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
