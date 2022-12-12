import "./ExpenseItem.css";
import {useEffect} from 'react'
function ExpenseSelectedItems(props) {
  const removeItem = () => {
        props.setSelectedProduct(current => (current.filter((item,index) => (index !== props.index))));
        props.setSum(props.sum - props.selectedProduct[props.index].amount)
        props.setCount(props.selectedProduct.length-1)
  }
  useEffect(()=>{
  },[props.selectedProduct])

  return (
    <div className="expense-item">
      <h4 className="expense-item__description">
        {props.title}
        <br></br>
        {props.amount}$
      </h4>
      <img src={props.imagePath} alt={props.title} height={100} width={100} />
      <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" className="delete" onClick={removeItem}/>
    </div>
  );
}
export default ExpenseSelectedItems;
