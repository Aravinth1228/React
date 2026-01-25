import { useState } from "react";

function Courses() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aravinth");
  const [gender, setGender] = useState("Male");

  function handleClick() {
    setCount((prev) => {
      const newCount = prev + 1;

      if (newCount % 2 === 0) {
        setName("ShreePriyanka"); // even
        setGender("Female");
      } else {
        setName("Aravinth"); // odd
        setGender("Male");
      }

      return newCount;
    });
  }

  return (
    <>
      <h1>Hi I'm {name}</h1>
      <p>We are learning React JS</p>
      <button onClick={handleClick}>Click Me</button>
        <p>Gender: {gender}</p>
    </>
  );
}

export default Courses;
