import React, { useEffect, useState } from "react";
const backUrl = "http://localhost:4010";

function ShortPolling() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch(`${backUrl}/messages`)
        .then((res) => res.json())
        .then((data) => setMessages(data));
      // .catch(console.log);
    }, 5000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${backUrl}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    }).then((res) => {
      setMessage("");
    });
    // .catch(console.log);
  };
  return (
    <>
      <div className="form-wrapper">
        <form
          id="form"
          className="validate"
          style={{ textAlign: "center" }}
          onSubmit={handleSubmit}
        >
          <div className="form-field">
            <label> Message </label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </form>
      </div>
      <section>
        <div style={{ textAlign: "center" }}>
          <h2>Messages</h2>
          <ul style={{ listStyleType: "none" }}>
            {messages.map((msg, index) => (
              <li key={index}>{msg.message}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ShortPolling;
