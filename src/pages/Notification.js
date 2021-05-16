import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import moment from "moment";
import { UserContext } from "../context/userContext";

const Notification = () => {
  /* TODO
   * Add refresh, delete all notification button
   */

  const [ notifications, setNotifications ] = useState([])

  const user = useContext(UserContext)[
    'user'
  ]

  useEffect(() => {
    setNotifications(user.notifications)
  }, [user])


  return (
    <div>
      <Header title="Notifications" />

      <SubHeading title="Notification List" />
      {notifications.map((notification) => {
        return (
          <div
            key={notification._id}
            className="bg-gray-600 p-5 lg:w-3/4  mb-4 rounded"
          >
            <p className="font-semibold mb-2">{notification.title}</p>
            <p>{notification.message}</p>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <p>
                By : <span className="font-semibold">{notification.by}</span>
              </p>
              <p>
                {moment(notification.time).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
