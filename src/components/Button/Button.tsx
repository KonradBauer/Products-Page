interface ButtonProps {
  text: string;
  capitalize?: boolean;
  width?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  marginTop: boolean;
  specialWidth: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  capitalize = false,
  width,
  marginTop,
  specialWidth,
}) => {
  return (
    <button
      className={`btn btn-error ${capitalize ? "capitalize" : "uppercase"}
      ${width ? "max-sm:w-[95%]" : ""}
      ${marginTop ? "max-sm:mt-4" : ""}
      ${specialWidth ? "max-sm:w-[91%]" : ""}
      hover: px-10 pt-1 tracking-wider text-white shadow-lg hover:bg-white hover:text-lightRed`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
