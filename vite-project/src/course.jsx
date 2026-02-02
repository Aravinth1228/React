import React from "react";
import useFetch from "./Hooks/useFetch";

function Courses() {
  const {
    count,
    setCount,
    name,
    setName,
    gender,
    setGender,
    users,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  function handleClick() {
    setCount((prev) => {
      const newCount = prev + 1;

      if (newCount % 2 === 0) {
        setName("ShreePriyanka");
        setGender("Female");
      } else {
        setName("Aravinth");
        setGender("Male");
      }

      return newCount;
    });
  }

  return (
    <>
      <h1>Hi I'm {name}</h1>
      <p>Gender: {gender}</p>

      <button onClick={handleClick}>Click Me</button>

      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}, {user.email}
        </p>
      ))}
    </>
  );
}

export default Courses;
