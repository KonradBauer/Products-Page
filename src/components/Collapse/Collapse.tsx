interface CollapseProps {
  title: string;
  content: string;
  customClassName?: string;
}

export const Collapse: React.FC<CollapseProps> = ({
  title,
  content,
  customClassName,
}) => {
  return (
    <div
      className={`font-rubik-500 mx-auto w-[55%] text-left max-md:mx-0 max-md:w-full  ${
        customClassName || ""
      }`}
    >
      <details className="collapse collapse-arrow">
        <summary className="collapse-title mb-8 text-left text-2xl font-bold transition hover:text-lightRed max-md:border-b-2 max-md:text-[16px] md:border-t-4">
          {title}
        </summary>
        <div className="collapse-content text-2xl transition">
          <p className="mt-10 text-left max-md:mt-2 max-md:text-sm">
            {content}
          </p>
        </div>
      </details>
    </div>
  );
};
