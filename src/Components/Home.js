import React,{ useContext, useState } from "react";
import { AddItem } from "./AddItem";
import { IncomeList } from "./IncomeList";
import { ExpenseList } from "./ExpenseList";
import { useNavigate, Navigate } from "react-router-dom" 
import { auth } from "../firebase/Firebase";
import { AuthContext } from "./Providers/AuthProvider";

export const Home = () => {
  const navigation = useNavigate();

  //ログアウトの処理
  const handleLogOut = () => {
    auth.signOut();
    navigation("/Login");
  }

  const { currentUser } = useContext(AuthContext);

  const [InputText, setInputText] = useState("");
  const [InputAmount,setInputAmount] = useState(0);
  const [IncomeItem,setIncomeItem] = useState([]);
  const [ExpenseItem,setExpenseItem] = useState([]);
  const [type, setType] = useState("inc");

  //ユーザーオブジェクトを持っているならhome,持っていなければloginページへredirect
  if(!currentUser) {
    return <Navigate to = "/Login"/>;
  }else {
    <div>
      <h1>Home画面です</h1>
      <AddItem
      InputText={InputText}
      setInputText={setInputText}
      type={type}
      setType={setType}
      InputAmount={InputAmount}
      setInputAmount={setInputAmount}
      IncomeItem={IncomeItem}
      setIncomeItem={setIncomeItem}
      ExpenseItem={ExpenseItem}
      setExpenseItem={setExpenseItem}
      />
      
      <div>
      <IncomeList
      IncomeItem={IncomeItem}
      setIncomeItem={setIncomeItem}
      />
      </div>

      <div>
      <ExpenseList
      ExpenseItem={ExpenseItem}
      setExpenseItem={setExpenseItem}
      />
      </div>

      <div>
        <button onClick={handleLogOut}>ログアウト</button>
      </div>
    </div>
  }
  
    
  
}