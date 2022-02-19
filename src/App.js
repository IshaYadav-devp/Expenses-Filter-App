import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 99,
    date: new Date(2020, 7, 16),
  },
  {
    id: "e2",
    title: "Paper",
    amount: 909,
    date: new Date(2020, 9, 10),
  },
  {
    id: "e3",
    title: "Car",
    amount: 990,
    date: new Date(2021, 7, 11),
  },
];

function App() {
  const [expense, setExpense] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
