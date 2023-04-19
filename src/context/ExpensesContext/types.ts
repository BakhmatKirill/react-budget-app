import { ReactNode } from "react";

export interface ExpenseContextProviderProps {
  children: ReactNode;
}

export interface ExpenseContextState {
  expenses: Expenses[];
  addExpense: (newExpenses: Expenses[]) => void;
  deleteExpense: (id: string) => void;
}

export interface Expenses {
  id: string;
  name: string;
  cost: number;
}