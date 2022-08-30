export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  error?: boolean;
  helperText?: string;
}
