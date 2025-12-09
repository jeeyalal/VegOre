

// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const url = "http://localhost:4000";

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${url}/api/user/login-admin`, data);

//       if (res.data.success) {
//         toast.success("Admin Login Successful ✅");
//         localStorage.setItem("adminToken", res.data.token);
//         navigate("/");
//         window.location.reload();
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       toast.error("Login failed ❌");
//     }
//   };

//   return (
//     <div className="add">
//       <form className="add-form" onSubmit={onSubmitHandler}>
//         <h2>Admin Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Admin Email"
//           required
//           onChange={onChangeHandler}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Admin Password"
//           required
//           onChange={onChangeHandler}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // ✅ LIVE BACKEND FROM ENV (LOCAL + VERCEL)
  const url = import.meta.env.VITE_BACKEND_URL;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/api/user/login-admin`, data);

      if (res.data.success) {
        toast.success("Admin Login Successful ✅");
        localStorage.setItem("adminToken", res.data.token);
        navigate("/");
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed ❌");
    }
  };

  return (
    <div className="add">
      <form className="add-form" onSubmit={onSubmitHandler}>
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          required
          value={data.email}
          onChange={onChangeHandler}
        />

        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          required
          value={data.password}
          onChange={onChangeHandler}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
