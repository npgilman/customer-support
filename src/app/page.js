"use client";
import React, { useState, useEffect } from "react";
import aiResponse from "./chat";

export default function Home() {
  const [newMessage, setNewMessage] = useState("");
  const [msg_index, setIndex] = useState(1);

  const [messages, setMessages] = useState([]);

  const onSend = async (e) => {
    e.preventDefault();
    if (newMessage.length === 0) return;

    const response = await aiResponse(newMessage);
    setNewMessage("");

    setMessages([
      ...messages,
      { msg: newMessage, index: msg_index, usr: true },
      { msg: response, index: msg_index + 1, usr: false },
    ]);
    setIndex(msg_index + 2);

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      AI Customer Support
      <div className="flex flex-col flex-1 z-10 max-w-5xl w-full justify-between font-mono text-sm bg-slate-500">
        <div>
          {messages.map((message) => (
            <div
              key={message.index}
              className={`${
                message.index % 2 == 0 ? "bg-slate-400" : "bg-slate-500"
              } ${message.usr ? "text-left pl-3" : "text-right pr-3"}`}
            >
              {message.msg}
            </div>
          ))}
        </div>
        <div>
          <form className="flex bg-slate-400">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              type="text"
              placeholder="enter message"
              className="flex-1 m-2 rounded"
            />
            <button
              className="pr-4 pl-4 bg-slate-200"
              onClick={onSend}
              type="submit"
            >
              {" "}
              send{" "}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
