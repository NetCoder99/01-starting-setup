import ExpenseData from './data/ExpenseData';
import Expenses from './components/Expenses';

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses data={ExpenseData} />
    </div>
  );
}

export default App;
