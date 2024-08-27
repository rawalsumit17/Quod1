// import React, { useState } from "react";
// import "./CSS/Login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const Login = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     axios
//       .post("http://localhost:3001/login", { email, password })
//       .then((response) => {
//         if (result.data === "success") {
//           console.log(response);
//           navigate("/home");
//         } else {
//           setError(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("There was an error logging in!", error);
//       });
//   };
//   return (
//     <div className="login">
//       <div className="login-container">
//         <div className="login-form">
//           <form className="form-container" onSubmit={handleSubmit}>
//             <p>Login</p>
//             {error && <p className="error">{error}</p>}
//             <div className="email">
//               <label htmlFor="email">Email</label>
//               <input
//                 className="login-input"
//                 type="email"
//                 placeholder="Email Address"
//                 autoComplete="off"
//                 name="email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="password">
//               <label htmlFor="password">Your Password</label>
//               <input
//                 className="login-input"
//                 type="password"
//                 placeholder="Enter Your Password"
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((response) => {
        if (response.data === "success") {
          console.log("Logged in successfully");
          navigate("/home");
        } else {
          setError(response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <p>Login</p>
            {error && <p className="error">{error}</p>}
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className="login-input"
                type="email"
                placeholder="Email Address"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Your Password</label>
              <input
                className="login-input"
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
