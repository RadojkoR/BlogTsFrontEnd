import axios from "axios";
import { useState, useEffect } from "react";

// interface adminInfo {
//   userNames: string[];
//   passwords: string[];
//   user_name: string;
// }

// interface ArrType {
//   arrPassword: string[];
//   arrUserName: string[];
// }

function LoginForm() {
  const [data, setData] = useState([]);
  // const [logedIn, setLogedIn] = useState(false);
  // const arrUserName:ArrType = [];
  // const arrPassword:ArrType = [];
  // const [userNames, setUserName] = useState([""]);
  // const [passwords, setPassword] = useState([""]);

  //  data.forEach((item: adminInfo) => {
  //    console.log(item.user_name);
  //   //  arrUserName.push(item.user_name);
  //  });

// console.log(arrUserName);
  const handleSubmit =  () => {
    // setLogedIn(!logedIn);
   
    // data.filter((item: adminInfo) => {
    //   // console.log(item.user_name);
    //     setUserName(item.user_name);
    //     setPassword(item.password);
    // })
// console.log(arrUserName);
// console.log(arrPassword);
    // if((arrUserName.includes("RadojkoRadulovic"))) {
    //   setLogedIn(true);
    //   console.log(logedIn);
    //   // console.log(item.user_name);
      
    // } else {
    //   setLogedIn(false);
    // }
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:");
      }
    }

    fetchData();
  }, []);
  console.log(data);
  
    return (
      <div className="max-width-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-16">
        <h1 className="text-white py-16"></h1>
        <form action="">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor=""
            >
              User Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
              required
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor=""
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
              required
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <button onClick={handleSubmit} className="bg-orange px-10 py-2 rounded-lg text-white hover:bg-loginPage focus:outline-white">
              Login
            </button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;