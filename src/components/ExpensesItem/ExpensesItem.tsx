import { IExpenses } from "../../context/ExpensesContext/types";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledExpensesItem } from "./styles";

interface IExpensesItem {
  item: IExpenses;
}

export const ExpensesItem = ({ item }: IExpensesItem) => {
  const { deleteExpense } = useExpensesContext();

  const handleDelete = () => {
    deleteExpense(item.id);
  };
  return (
    <StyledExpensesItem>
      {item.name}
      <Badge cost={item.cost}></Badge>
      <Close onClick={handleDelete} />
    </StyledExpensesItem>
  );
};
