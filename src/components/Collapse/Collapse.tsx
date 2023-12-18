interface CollapseProps {
  title: string;
  content: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  return (
    <div className="w-[55%] mx-auto max-md:mx-0 max-md:w-full font-rubik-500 text-left">
      <br className="text-lightRed" />
      <details className="collapse collapse-arrow bg-base-200 bg-transparent">
        <summary className="collapse-title text-2xl font-bold text-left transition hover:text-lightRed border-t-4 max-md:border max-md:text-sm">
          {title}
        </summary>
        <div className="collapse-content text-2xl transition">
          <p className="text-left mt-10 max-md:text-sm max-md:mt-2">{content}</p>
        </div>
      </details>
    </div>
  );
};
