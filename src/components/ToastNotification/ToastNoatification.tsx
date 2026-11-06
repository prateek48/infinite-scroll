// @ts-nocheck
import React from "react";
import { FaCross, FaInfo } from "react-icons/fa";
import "./ToastNotification.css";

const ToastNoatification = ({ type, position, message,onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaInfo />;
        break;
      case "error":
        return <FaCross />;
    }
  };
  return (
    <div className={`${type} toast-container`}>
      <div>{getIcon()}</div>

      {message}
      <div onClick={()=>onClose()}>X</div>
    </div>
  );
};

export default ToastNoatification;
