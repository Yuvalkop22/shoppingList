/* eslint-disable no-useless-escape */
import ExpenseItem from "../components/ExpenseItem";
import ExpenseSelectedItem from '../components/ExpenseSelectedItem';
import { ReactDialogBox } from 'react-js-dialog-box';
import 'react-js-dialog-box/dist/index.css';
import { useEffect, useState } from "react";
import "./styles.css";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [sum, setSum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isInCart,setIsInCart] = useState(false);
  const [title, setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [validationError,setValidationError] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };
    fetchProducts();
  }, []);

  useEffect(()=>{
  },[selectedProduct])

  useEffect(()=>{
  },[sum])

  useEffect(()=>{
  },[count])


  const openBox = (title) => {
        setTitle(title)
        setIsOpen(true);
  };
  const closeBox = () => {
        setIsOpen(false);
  };


  function handleSubmit(event){
    event.preventDefault();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (selectedProduct.length === 0){
      setValidationError("You must select products before ordering")
    }else if (!name.includes(" ")){
      setValidationError("Full-Name must contain space");
    }else if(!email.match(validRegex)){
      setValidationError("Email must contain @");
    }else if (!name.includes(" ") && !email.includes("@")){
      setValidationError("Full-Name must contain space and Email must contain @");
    }else{
      const requestOptions = {
        method: 'POST',
        crossDomain: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, selected: selectedProduct })
      };
      fetch('/api/reservations/sendRes', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
      setValidationError("Thanks for your order")
    }
  }
   
  return (
    <div className="home">
    <h3 className="counter">{count}</h3>
    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" className="cart" onClick={()=>openBox("Your Cart", selectedProduct)}/>
    {isOpen && (
                <>
                <ReactDialogBox
                    closeBox={closeBox}
                    modalWidth='60%'
                    headerBackgroundColor='black'
                    headerTextColor='white'
                    headerHeight='20'
                    headerText = {title}
                    closeButtonColor='white'
                    bodyBackgroundColor='white'
                    bodyTextColor='black'
                    bodyHeight='100%'>
                  {
                    selectedProduct && Object.values(selectedProduct).map((item,index)=>  
                       <ExpenseSelectedItem
                        title= {Object.values(item)[0]}
                        amount= {Object.values(item)[1]}
                        imagePath={Object.values(item)[2]}
                        description = {Object.values(item)[3]}
                        secondUrl = {Object.values(item)[4]}
                        setSelectedProduct = {setSelectedProduct}
                        selectedProduct = {selectedProduct}     
                        count = {count}
                        setCount = {setCount}
                        sum = {sum}
                        setSum = {setSum}
                        index={index}
                        key={index}     
                      >
                      </ExpenseSelectedItem>
                    )
                  }
                  <h4>Total = {sum}$</h4> 
                  <form onSubmit={handleSubmit}>
                    <h4>Make Your Reservation</h4>
                      <label>Full Name: </label>
                      <input id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Email: </label>
                      <input id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="btnOrder">Order</button>
                      <h4 className="validationError">{validationError}</h4>
                  </form>             
                </ReactDialogBox>
            </>
        )} 
      <div className="products">
        {products &&
          products.map((product,index) => (
            <ExpenseItem
              selectedProduct = {selectedProduct}
              setSelectedProduct = {setSelectedProduct}
              count = {count}
              key={index}
              isInCart={isInCart}
              setIsInCart = {setIsInCart}
              setCount = {setCount}
              sum = {sum}
              setSum = {setSum}
              title={product.title}
              price = {product.amount}
              amount={product.amount}
              imagePath={product.imagePath}
              description = {product.description}
              secondUrl = {product.secondUrl}
            ></ExpenseItem>
          ))}
      </div>
    </div>
  );
};

export default Home;
