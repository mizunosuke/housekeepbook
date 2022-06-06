import React from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const { login } = props;
   

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value,password.value);
        login(email.value,password.value);
    }

    return(
        <div>
            <h1>Login</h1>
          <form onSubmit={handleLogin}>
              <label>email</label>
              <input type="email" name="email" placeholder="email@gmail.com"/>

              <label>password</label>
              <input type="password" name="password" placeholder="submit your password"/>

              <button>ログイン</button>
              <div>
                  ユーザー登録は<Link to={'/SignUp'}>こちら</Link>から
              </div>
          </form>
        </div>
    )
}