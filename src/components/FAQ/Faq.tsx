import { Collapse } from "../Collapse/Collapse";

export const Faq = () => {
  return (
    <div className="text-center" id="pricing">
      <div className="text-[42px] font-bold max-md:mx-6 max-md:text-[25px]">
        Frequently Asked Questions
      </div>
      <div className="mx-96 mb-24 mt-6 text-2xl font-semibold text-lightGrey max-lg:mx-24 max-md:mx-8 max-md:mb-16 max-md:text-[16px]">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </div>
      <Collapse
        customClassName="max-md: px-5 font-semibold"
        title="What is Bookmark?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <Collapse
        customClassName="max-md: px-5 font-semibold"
        title="How can I request a new browser?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <Collapse
        customClassName="max-md: px-5 font-semibold"
        title="Is there a mobile app?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <Collapse
        customClassName="max-md: px-5 font-semibold"
        title="What about other Chromium browsers?"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis deleniti ea nam tenetur suscipit quam sunt, deserunt voluptas id vel quibusdam molestias, praesentium, magni consequuntur doloremque nulla minima dolore illo?"
      />
      <button className="max-md:mb-26 btn btn-active mb-40 mt-12 items-center justify-center bg-lightBlue px-8 align-middle text-white hover:bg-white hover:text-lightBlue max-md:mt-6">
        More Info
      </button>
    </div>
  );
};
