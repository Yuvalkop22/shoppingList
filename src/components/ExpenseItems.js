function ExpenseItems(props){
    return(
        <div>
   <table>
   <tr>
    <td>{props.title}</td>
    <td>{props.amount}</td>
  </tr>
  </table>
        </div>
    )
}

export default ExpenseItems;