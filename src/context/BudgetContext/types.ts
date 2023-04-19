import { ReactNode } from "react";

export interface BudgetContextState {
  budget: number;
  setBudget: (newBudget: number) => void;
}

export interface BudgetContextProviderProps {
  children: ReactNode;
}