import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function inputHandler(event) {
    const { value, name } = event.target;
    setContact((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={inputHandler}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={inputHandler}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={inputHandler}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
