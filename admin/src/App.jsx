// import Navbar from "./components/Navbar/Navbar";
// import SideBar from "./components/sideBar/SideBar";
// import {Routes , Route} from 'react-router-dom'
// import Add from "./pages/Add/Add";
// import List from "./pages/List/List";
// import Orders from "./pages/Orders/Orders";
// import Subscriptions from "./pages/Subscriptions/Subscriptions";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const url = "http://localhost:4000";
//   return (
//     <div >
//       <ToastContainer/>
//       <Navbar/>
//       <hr />
//       <div className="app-content">
//         <SideBar />

//         <Routes>
//             <Route path="/add" element={<Add url={url}/>} />
//             <Route path="/list" element={<List url={url}/>} />
//             <Route path="/orders" element={<Orders url={url}/>} />
//             <Route path="/subscriptions" element={<Subscriptions url={url}/>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/sideBar/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Login from "./pages/Login/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "http://localhost:4000";

  // ✅ Check if admin is logged in
  const isAuth = localStorage.getItem("adminToken");

  return (
    <div>
      <ToastContainer />

      {!isAuth ? (
        // ✅ If NOT logged in → Only show Login Page
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      ) : (
        // ✅ If logged in → Show Full Admin Panel
        <>
          <Navbar />
          <hr />
          <div className="app-content">
            <SideBar />

            <Routes>
              <Route path="/" element={<Add url={url} />} />
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
              <Route path="/subscriptions" element={<Subscriptions url={url} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
