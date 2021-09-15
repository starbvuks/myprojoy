import { useEffect, useState } from "react";
import axios from "axios";

const ApiTest = () => {
  const [user, setUser] = useState([]);
  const queries = [1, 2, 3];

  useEffect(() => {
    for (let i = 0; i < queries.length; i++) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${queries[i]}`)
        .then((res) => {
          setUser((prev) => [...prev, res.data]);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(user);

  return (
    <div className="bg-gray-800 text-gray-100 min-h-screen">
      <span>yo</span>
    </div>
  );
};

export default ApiTest;
