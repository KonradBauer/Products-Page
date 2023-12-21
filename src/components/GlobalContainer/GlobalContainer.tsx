interface GlobalContainerProps {
  children: React.ReactNode;
}

export const GlobalContainer: React.FC<GlobalContainerProps> = ({ children }) => {
  return <div className="m-auto pt-8 font-rubik-500">{children}</div>;
};
