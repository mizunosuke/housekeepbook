import { doc, setDoc } from 'firebase/firestore';
import React from 'react'
import { db } from '../firebase/Firebase';


export const AddItem = (props) => {

  const { InputText, setInputText, InputAmount, setInputAmount, type, setType, setIncomeItem, setExpenseItem, IncomeItem, ExpenseItem, currentUser} = props;

  //内容を取得
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  }
  //金額を取得
  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  }

  //収支タイプを取得
  const typeHandler = (e) => {
    setType(e.target.value)
  }

  //入力内容をリセット
  const reset = () => {
    setInputText("");
    setInputAmount("");
  }

  //handleSubmit時にtypeが"inc"の場合firestoreにドキュメントを追加
  const addIncome = async(text, amount) => {
    try {
    const docId = Math.random().toString(4).substring(21);
    //firestoreにデータを追加 doc()でDocumentReferenceインスタンス取得
    await setDoc(doc(db,"incomeItems","docId"),{
      text,
      amount,
      uid:currentUser.uid
    })
    .then((res)=>{
      setIncomeItem([...IncomeItem,{
        text:InputText,
        amount:InputAmount,
        docId:docId,
      }])
    })
  }catch(error){
    alert(error);
  }
}

  //handleSubmit時にtypeが"exp"の場合実行される
   const addExpense = async(text, amount) => {
    try {
    const docId = Math.random().toString(4).substring(21);
    //firestoreにデータを追加 doc()でDocumentReferenceインスタンス取得
    await setDoc(doc(db,"expenseItems","docId"),{
      text,
      amount,
      uid:currentUser.uid
    })
    .then((res)=>{
      setExpenseItem([...ExpenseItem,{
        text:InputText,
        amount:InputAmount,
        docId:docId,
      }])
    })
  }catch(error){
    alert(error);
  }
}
  


  //エンターキー押下後実行する関数を条件分岐で指定
  const handleSubmit = (e) => {
    e.preventDefault();
    if(type==="inc"){
      addIncome(InputText,InputAmount)
      reset();
      console.log(IncomeItem);
    }else if(type==="exp"){
      addExpense(InputText,InputAmount)
      reset();
      console.log(ExpenseItem);
    }else if(InputText==="" || InputAmount===""){
      alert("正しい内容を入力してください")
    }
    
  }

  return (
    <div>
       <div className="inputArea">
        <form onSubmit={handleSubmit}>
          <select onChange={typeHandler}>
            <option value="">--項目を選択してください</option>
            <option value="inc">収入</option>
            <option value="exp">支出</option>
          </select>

         <div className='inputTextArea'>
          <label>内容</label>
          <input type="text" placeholder='内容を入力' onChange={handleTextChange}/>
         </div>

         <div className='inputAmountArea'>
          <label>金額</label>
          <input type="text" placeholder='金額を入力' onChange={handleAmountChange}/>
         </div>

          <button>追加</button>
        </form>
      </div>
    </div>
  )
 }
 

