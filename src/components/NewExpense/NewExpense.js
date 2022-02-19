import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdting, setIsEdting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdting(false);
  };

  const startEdtingHandler = () => {
    setIsEdting(true);
  };

  const stopEditingHandler = () => {
    setIsEdting(false);
  };

  return (
    <div className="new-expense">
      {!isEdting && (
        <button onClick={startEdtingHandler}>Add New Expense</button>
      )}
      {isEdting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
