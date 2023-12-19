import { Collapse } from "../Collapse/Collapse";

export const Faq = () => {
  return (
    <div className="text-center">
      <div className="text-[42px] font-bold max-md:text-[25px] max-md:mx-6">
        Frequently Asked Questions
      </div>
      <div className="text-2xl text-lightGrey mx-96 mt-6 mb-24 max-md:mb-16 max-md:text-[16px] max-md:mx-8 max-lg:mx-24">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel
        free to email us.
      </div>
      <Collapse
        title="What is Bookmark?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <Collapse
        title="How can I request a new browser?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <Collapse
        title="Is there a mobile app?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <Collapse
        title="What about other Chromium browsers?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <button className="btn btn-active mt-12 mb-40 bg-lightBlue text-white px-8 items-center align-middle justify-center hover:bg-white hover:text-lightBlue max-md:mt-6 max-md:mb-26">
        More Info
      </button>
    </div>
  );
};
