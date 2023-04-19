import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/Currency";
import { CurrencyContextState, CurrencyContextProviderProps } from "./types";

const CurrencyContext = createContext<CurrencyContextState>({
  currency: Currency.USD,
  setCurrency: () => {},
});

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextState>(() => ({
    currency: Currency.USD,
    setCurrency: (newCurrency) => {
      setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency }));
    },
  }));
  return currencyContext;
};

export const useCurrencyContex = () => useContext<CurrencyContextState>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
