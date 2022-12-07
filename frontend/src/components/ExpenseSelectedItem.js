import "./ExpenseItem.css";
import {useEffect} from 'react'
function ExpenseItems(props) {
  
  useEffect(()=>{
  },[props.selectedProduct])

  return (
    <div className="expense-item">
      <h4 className="expense-item__description">
        {props.title}
        <br></br>
        {props.amount}
      </h4>
      <img src={props.imagePath} alt={props.title} height={100} width={100} />
    </div>
  );
}
export default ExpenseItems;
