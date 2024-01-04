import "./login.scss";
import netflixLogo from "../../images/netflix.png";

export const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={netflixLogo} alt="netflix" />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};
