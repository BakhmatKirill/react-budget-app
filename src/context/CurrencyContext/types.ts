import { ReactNode } from "react";
import { Currency } from "../../config/Currency";

export interface CurrencyContextState {
  currency: Currency;
  setCurrency: (newCurrency: Currency) => void;
}

export interface CurrencyContextProviderProps {
  children: ReactNode;
}