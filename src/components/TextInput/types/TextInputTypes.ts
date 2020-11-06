import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder: string;
  id?: string;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
