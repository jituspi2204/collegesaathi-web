import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiAtSign, FiCreditCard } from "react-icons/fi";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import firebase from "../firebase_config";

const Register = (props) => {
  const [rollno, setRollno] = useState("");
  const [oldRollno, setOldRollno] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("props history ", props.history);
  useEffect(() => {
    if(firebase.auth().currentUser)
    setEmail(firebase.auth().currentUser.email);
  }, []);

  const loginHandler = () => {
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

      console.log("DAta in register", data);
      let token = "Bearer " + data.token;
      localStorage.setItem("token_collegesaathi", token);
      props.history.push("/");
      window.location.reload();
      setLoading(false);
    } catch (er) {
      console.log(er);
      setLoading(false);
    }
  };

  return loading ? (
    <Loading loadingText="Registering User..."/>
  ) : (
    <div>
      <Header title="Register" />
      <section className="flex flex-col items-center">
        <p className="mb-12 mt-12 font-semibold text-2xl">
          Welcome to College Saathi 🎉
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-between w-full">
            <FiAtSign size="30" className="m-2"/>
          <div
            className="bg-white text-gray-500 p-2 font-semibold rounded-md cursor-not-allowed mb-2 w-full"
          >{email}</div>
          </div>

          <div className="flex flex-row items-center justify-between w-full">
            <FiCreditCard size="30" className="m-2"/>
          <input
            value={rollno}
            maxLength={11}
            onChange={(e) => setRollno(e.target.value)}
            placeholder="Roll Number"
            className="text-black p-2 rounded-md mb-2"
          />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <FiCreditCard size="30" className="m-2"/>
          <input
            value={oldRollno}
            maxLength={11}
            onChange={(e) => setOldRollno(e.target.value)}
            placeholder="Old Roll Number**"
            className="text-black p-2 rounded-md mb-2"
          />
  </div>
          <p className="text-xs">**Old Roll Number is only for Upgraded Students</p>
        </div>
          <div className="flex flex-col items-center mt-5">
            <button className="bg-yellow-400 text-black px-4 py-1 mb-1 rounded" onClick={registerHandler}>Register</button>
          <p className="text-xs">
            Already User ? <span className="font-bold cursor-pointer"  onClick={loginHandler}>Login </span>
          </p>
          </div>
      </section>
    </div>
  );
};

export default Register;
