import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) {
    const[title,setTitle]=useState(props.title)
    const [amount,setAmount]=useState(props.amount)
    const clickHandler=()=>{
        setTitle('new title..')
        setAmount(100)
    }
    return ( 
        <Card className="expense-item">
        <ExpenseDate date= {props.date}></ExpenseDate>
       <div className="expense-item__description">
        <h2>{title}</h2>
        
       <div className="expense-item__price">{amount}</div>
       </div>
       <button onClick={clickHandler}>Change title</button>
       <button onClick={clickHandler}>Change Expense</button>
    </Card>
       
    )
  
}
export default ExpenseItem;