interface CollapseProps {
  title: string;
  content: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  return (
    <div className="w-[55%] mx-auto max-md:mx-0 max-md:w-full font-rubik-500 text-left">
      <details className="collapse collapse-arrow">
        <summary className="collapse-title text-2xl font-bold text-left mb-8 transition hover:text-lightRed md:border-t-4 max-md:border-b-2 max-md:text-[16px]">
          {title}
        </summary>
        <div className="collapse-content text-2xl transition">
          <p className="text-left mt-10 max-md:text-sm max-md:mt-2">{content}</p>
        </div>
      </details>
    </div>
  );
};
