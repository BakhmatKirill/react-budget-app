import { ReactNode } from "react";

export interface ExpenseContextProviderProps {
  children: ReactNode;
}

export interface ExpenseContextState {
  expenses: IExpenses[];
  addExpense: (newExpenses: IExpenses[]) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpenses {
  id: string;
  name: string;
  cost: number;
}