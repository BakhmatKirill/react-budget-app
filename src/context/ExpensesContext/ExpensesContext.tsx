import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useState } from "react";
import { Expenses, ExpenseContextState, ExpenseContextProviderProps } from "./types";

export const ExpenseContext = createContext<ExpenseContextState>({
  expenses: [],
  addExpense: (expenses: Expenses[]) => {},
  deleteExpense: () => {},
});

const useExpensesContextValue = () => {
  const [expensesValue, setExpensesValue] = useState<ExpenseContextState>(() => ({
    expenses: [
      { id: uuidv4(), name: "shopping", cost: 100 },
      { id: uuidv4(), name: "drinking", cost: 200 },
      { id: uuidv4(), name: "relax", cost: 500 },
      { id: uuidv4(), name: "study", cost: 400 },
    ],
    addExpense: (expenses: Expenses[]) => {
      setExpensesValue((ctx) => ({ ...ctx, expenses: expenses }));
    },
    deleteExpense: (id: string) => {
      setExpensesValue((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesValue;
};
export const useExpensesContext = () => useContext<ExpenseContextState>(ExpenseContext);

export const ExpenseContextProvider = ({ children }: ExpenseContextProviderProps) => {
  return (
    <ExpenseContext.Provider value={useExpensesContextValue()}>{children}</ExpenseContext.Provider>
  );
};
