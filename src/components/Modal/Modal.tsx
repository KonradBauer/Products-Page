import { ModalElement } from "./ModalElement";
import heroThird from "../../images/illustration-features-tab-3.svg";

export const Modal = () => {
  return (
    <div>
      <dialog id="modal" className="modal max-md:px-10">
        <div className="bg-white p-4 rounded-lg max-md:p-2">
          <p className="py-4 max-md:p-0">
            <ModalElement
              hero={heroThird}
              title="Share your bookmarks"
              description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            />
          </p>
          <div className="modal-action flex justify-end mt-4">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
