import ExpenseItems from './components/ExpenseItems';
import './styles'

function App() {
  const expense = [
    {title:'Tomato', amount:1.3,date:new Date(2020,2,28)},
    {title:'Cucumber', amount:1.4,date:new Date(2020,2,28)},
    {title:'Onion', amount:1.2,date:new Date(2020,2,28)},
    {title:'Lettuce', amount:3,date:new Date(2020,2,28)},
    {title:'Pepper', amount:1.6,date:new Date(2020,2,28)},
    {title:'Carrot', amount:1.1,date:new Date(2020,2,28)}
  ]
  
  return(
    <div className="App">
      <table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
      {expense.map((exp)=>
        <ExpenseItems title = {exp.title} amount = {"$"+exp.amount}></ExpenseItems>
      )}
      </table>
    </div>
  )
}

export default App;
