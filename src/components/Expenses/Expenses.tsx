import { ChangeEvent, useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpenses } from "../../context/ExpensesContext/types";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import Search from "../Search/Search";
import { StyledBlock, StyledList } from "./styles";

export const Expenses = () => {
  const { expenses } = useExpensesContext();

  const [searchValue, setSearchValue] = useState<string>("");
  const [findedExpenses, setFindedExpenses] = useState<IExpenses[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const findExpenses = expenses;
    setFindedExpenses(
      findExpenses.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())),
    );
  }, [searchValue, expenses]);

  return (
    <StyledList>
      <Search handleSearch={handleSearch} searchValue={searchValue}></Search>
      {findedExpenses.length > 0 ? (
        findedExpenses.map((item: IExpenses) => {
          return <ExpensesItem key={item.name} item={item}></ExpensesItem>;
        })
      ) : (
        <StyledBlock>Oooops 🙈</StyledBlock>
      )}
    </StyledList>
  );
};
