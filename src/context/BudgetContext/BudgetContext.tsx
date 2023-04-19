import { createContext, useContext, useState } from "react";
import { BudgetContextState, BudgetContextProviderProps } from "./types";

export const BudgetContext = createContext<BudgetContextState>({
  budget: 0,
  setBudget: () => {},
});
const useBudgetContextValue = () => {
  const [budgetValue, setBudgetValue] = useState<BudgetContextState>(() => ({
    budget: 3000,
    setBudget: (newBudget) => {
      setBudgetValue((ctx) => ({ ...ctx, budget: newBudget }));
    },
  }));
  return budgetValue;
};

export const useBudgetContext = () => useContext<BudgetContextState>(BudgetContext);

export const BudgetContextProvider = ({ children }: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
