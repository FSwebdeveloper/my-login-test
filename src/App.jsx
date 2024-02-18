import React, { useState } from "react";

function App() {
    

  const[change, setChange] = useState({
    email: "",
    password: ""
  });

  function handleChange (e) {
   setChange({
    ...change,
     [e.target.name] : e.target.value
   })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    fetch("/login",{
    method:"POST",
    body:JSON.stringify(change),
    headers:{
        "Content-Type": "application/json"
    }
    })
    .then((response) => {
      console.log (response)
    })
    .catch((err) => {
    console.log(err)
    });


  }

  
  return (
    <div className="container">
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" name="email" onChange={handleChange}/>
      <input type="password" placeholder="Password" name="password" onChange={handleChange} />
      <button type="submit">login</button>
    </form>
    </div>
  );
}

export default App;

