interface GlobalContainerProps {
  children: React.ReactNode;
}

export const GlobalContainer: React.FC<GlobalContainerProps> = ({
  children,
}) => {
  return <div className="font-rubik-500 m-auto pt-8">{children}</div>;
};
