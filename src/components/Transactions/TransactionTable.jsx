import TransactionRow from "./TransactionRow";
import css from "./TransactionTable.module.css";

const TransactionTable = ( { transactions } ) => {

const tableInnerMarkup = transactions.map(
    transaction => <TransactionRow  key={transaction.id}
                                    type={transaction.type}
                                    amount={transaction.amount}
                                    currency={transaction.currency} 
    />

);
    return (<table className = {css["transaction-history"]}>
    <caption className={css["table-caption"]}>The Bank of Galaxy Empire Report:</caption>
    <thead>
      <tr>
        <th className="th-type">Type</th>
        <th className="th-amount">Amount</th>
        <th className="th-currency">Currency</th>
      </tr>
    </thead>
    <tbody>
        {tableInnerMarkup}
    </tbody>
  </table>
  )
}

export default TransactionTable;