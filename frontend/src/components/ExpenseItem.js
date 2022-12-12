import "./ExpenseItem.css";
import 'react-js-dialog-box/dist/index.css'
import { ReactDialogBox } from 'react-js-dialog-box'
import {useState,useEffect} from 'react'
function ExpenseItems(props) {
  const [isOpen, setIsOpen] = useState(false);
  const increase = () => {
    props.setSum(props.sum + props.price)
    const result = Object.values(props.selectedProduct);
    props.setSelectedProduct(prev=>{ return [...result,{
      name: props.title,
      amount: props.amount,
      url: props.imagePath,
      description: props.description,
      secondUrl: props.secondUrl
    }]})
    props.setIsInCart(true);
    props.setCount(props.selectedProduct.length+1);
  }
  const closeBox = () => {
        setIsOpen(false);
  };
  const openBox = () => {
        setIsOpen(true);
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
      <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt=""
       className="plus" onClick={increase} />
      <img src="https://cdn-icons-png.flaticon.com/512/32/32175.png" alt="" className="plus" onClick={openBox}/>
       {isOpen && (
                <>
                <ReactDialogBox
                    closeBox={closeBox}
                    modalWidth='60%'
                    headerBackgroundColor='black'
                    headerTextColor='white'
                    headerHeight='65' 
                    headerText = {"Information about " + props.title}
                    closeButtonColor='white'
                    bodyBackgroundColor='white'
                    bodyTextColor='black'
                    bodyHeight='100%'>
                  {
                    <div className="expense-item">
                      <h4 className="expense-item__description">
                        {props.description}
                      </h4>
                      <img src={props.secondUrl} alt={props.title} height={100} width={100} />
                    </div>
                  }
                </ReactDialogBox>
            </>
        )} 
      <img src={props.imagePath} alt={props.title} height={100} width={100} />
    </div>
  );
}
export default ExpenseItems;
