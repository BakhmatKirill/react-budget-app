import { StyledButton } from "./styles";

interface IButton {
  children: string;
}

export const Button = ({ children }: IButton) => {
  return <StyledButton>{children}</StyledButton>;
};
