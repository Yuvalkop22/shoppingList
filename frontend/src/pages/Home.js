import ExpenseItem from "../components/ExpenseItem";
import ExpenseSelectedItem from '../components/ExpenseSelectedItem';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [sum, setSum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isInCart,setIsInCart] = useState(false);
  // const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
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

  const openBox = (title) => {
        setTitle(title)
        setIsOpen(true);
  };
  const closeBox = () => {
        setIsOpen(false);
  };

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
                    headerHeight='65'
                    headerText = {title}
                    closeButtonColor='white'
                    bodyBackgroundColor='white'
                    bodyTextColor='black'
                    bodyHeight='100%'>
                  {
                    selectedProduct && Object.values(selectedProduct).map(item=>
                        
                       <ExpenseSelectedItem
                        title= {Object.values(item)[0]}
                        amount= {Object.values(item)[1]}
                        imagePath={Object.values(item)[2]}          
                      >
                      </ExpenseSelectedItem>
                    )
                  }
                  <h2>Total = {sum}</h2>              
                </ReactDialogBox>
            </>
        )} 
      <div className="products">
        {products &&
          products.map((product) => (
            <ExpenseItem
              selectedProduct = {selectedProduct}
              setSelectedProduct = {setSelectedProduct}
              count = {count}
              isInCart={isInCart}
              setIsInCart = {setIsInCart}
              setCount = {setCount}
              sum = {sum}
              setSum = {setSum}
              title={product.title}
              price = {product.amount}
              amount={"$" + product.amount}
              imagePath={product.imagePath}
            ></ExpenseItem>
          ))}
      </div>
    </div>
  );
};

export default Home;
