import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider"

export const SignUp = () => {

    const { signUp } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value, password.value);
        signUp(email.value, password.value);
    }

    return(
        <div>
            <h1>SignUp</h1>
          <form onSubmit={handleSignUp}>
              <div>
              <label>email</label>
              <input type="email" name="email" placeholder="email@gmail.com"/>
              </div>

              <div>
              <label>password</label>
              <input type="password" name="password" placeholder="submit your password"/>
              </div>

              <button>Sign UP</button>
          </form>
        </div>
    )
}
