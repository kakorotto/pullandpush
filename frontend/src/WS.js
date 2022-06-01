import React from "react";
import { useEffect, useState } from "react";

import io from "socket.io-client";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
const BASE_URL = "http://localhost:4000";

const socket = io(BASE_URL);

const WS = (props) => {
  const handleNewUserMessage = (message) => {
    socket.emit("message", message);
  };
  useEffect(() => {
    socket.on("new-message", (data) => {
      console.log(data);
      addResponseMessage(data);
    });
  }, []);
  return <Widget handleNewUserMessage={handleNewUserMessage} />;
};

export default WS;
