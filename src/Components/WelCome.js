import React from "react";

export const WelCome = () => {

    return(
        <div>
          <div className="container">
            <h1>家計簿管理アプリへようこそ！</h1>
            <button type="submit"><a href="/SignUp">新規登録</a></button>

            <button type="submit"><a href="/Login">ログイン</a></button>
          </div>
        </div>
    )
}