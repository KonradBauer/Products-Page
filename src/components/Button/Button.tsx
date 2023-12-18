interface ButtonProps {
  text: string;
  capitalize?: boolean;
  width?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, capitalize = false, width }) => {
  return (
    <button
      className={`btn btn-error ${capitalize ? "capitalize" : "uppercase"}
      ${width ? "max-sm:w-[95%]" : ""}
      text-white px-10 pt-1 tracking-wider shadow-lg hover:bg-white hover:text-lightRed hover:`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
