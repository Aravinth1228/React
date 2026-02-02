import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aravinth");
  const [gender, setGender] = useState("Male");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, [url]);

  return {
    count,
    setCount,
    name,
    setName,
    gender,
    setGender,
    users,
    setUsers,
  };
};

export default useFetch;
