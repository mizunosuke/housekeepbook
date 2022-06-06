import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = React.createContext();


export const AuthProvider = (props) => {
    //AuthProviderに囲まれたコンポーネントをchildrenとして受け取る
    const { children } = props;
    const [currentUser, setCurrentUser] = useState(null);

    //signup時にデータベースにユーザー情報を登録
    const signUp = (email, password) => {
        //Promiseの戻り値としてUserCredential(user情報のオブジェクト？)を返す
        createUserWithEmailAndPassword(auth, email, password)
        .then((user)=>{
            //ユーザー変更時にコールバックがトリガーされる
            onAuthStateChanged(auth,(user)=>{
                setCurrentUser(user);
                console.log(user.uid);
            })         
        })
    }

    //login時にデータベースにユーザ情報を登録
    const login = (email,password) => {
      //promiseの返り値としてUserCredential(ユーザ情報のオブジェクト)を返す
      signInWithEmailAndPassword(auth,email,password)
      .then((user)=>{
          //ユーザー情報変更時にコールバック関数がトリガーされる
          onAuthStateChanged(auth,(user)=>{
              setCurrentUser(user);
              console.log(user);
          })
      })
    }

    //初回マウント時に認証済みか確認
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    },[]);

    return(
        <AuthContext.Provider value={{signUp,currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext };