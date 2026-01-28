import { useEffect, useState } from "react";

function Courses() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aravinth");
  const [gender, setGender] = useState("Male");
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Hi I'm {name}</h1>
      <p>Gender: {gender}</p>

      <button onClick={handleClick}>Click Me</button>

      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name},{user.email}</p>
      ))}
    </>
  );
}

export default Courses;
