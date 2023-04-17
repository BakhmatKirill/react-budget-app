import Select from "react-select";
import { Currency } from "../../config/Currency";

const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CustomSelect = () => {
  return <div>CustomSelect</div>;
};
