import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import "./components/ExpenseItem.css";

function App() {
  const expense = [
    {
      title: "Tomato",
      amount: 1.3,
      date: new Date(2020, 2, 28),
      imagePath: "./images/tomato.png",
    },
    {
      title: "Cucumber",
      amount: 1.4,
      date: new Date(2020, 2, 28),
      imagePath: "./images/cucumber.png",
    },
    {
      title: "Onion",
      amount: 1.2,
      date: new Date(2020, 2, 28),
      imagePath: "./images/onion.png",
    },
    {
      title: "Lettuce",
      amount: 3,
      date: new Date(2020, 2, 28),
      imagePath: "./images/lettuce.png",
    },
    {
      title: "Pepper",
      amount: 1.6,
      date: new Date(2020, 2, 28),
      imagePath: "./images/bell-pepper.png",
    },
    {
      title: "Carrot",
      amount: 1.1,
      date: new Date(2020, 2, 28),
      imagePath: "./images/carrot.png",
    },
  ];

  return (
    <div className="App">
      {expense.map((exp) => (
        <ExpenseItem
          title={exp.title}
          amount={"$" + exp.amount}
          imagePath={exp.imagePath}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
