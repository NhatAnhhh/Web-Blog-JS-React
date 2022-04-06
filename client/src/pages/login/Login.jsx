import axios from "axios";
import { useContext,useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";


export default function Login() {
  const userRef = useRef();
  const passwordref = useRef();
  const{dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordref.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload: res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  };

  
  // return (
  //   <div className="login">
  //     <span className="loginTitle">Login</span>
  //     <form className="loginForm" onSubmit={handleSubmit}>
  //       <label>Username</label>
  //       <input className="loginInput" type="text" placeholder="Enter your Username..."
  //       ref = {userRef} />
  //       <label>Password</label>
  //       <input className="loginInput" type="password" placeholder="Enter your password..."
  //       ref = {passwordref} />
  //       <button className="loginButton"type="submit" disabled={isFetching}>Login</button>
  //     </form>
  //       <button className="loginRegisterButton">
  //       <Link className="link" to = '/register'>Register</Link>
  //       </button>
  //   </div>
  // );

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">TUFY</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="username"
              required
              className="loginInput"
              ref={userRef}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={passwordref}
            />
            {/* <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button> */}
            <button className="loginButton"type="submit" disabled={isFetching}>Login</button>
            <span className="loginForgot">?</span>
            {/* <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button> */}
            <button className="loginRegisterButton">
              <Link className="link" to = '/register'>Register</Link>
         </button>
          </form>
        </div>
      </div>
    </div>
  );
}
