interface ButtonProps {
  texto: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({ texto, onClick, type = "button" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {texto}
    </button>
  );
}
