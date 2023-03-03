import Image from "components/Images/image";

export default function Details() {
  return (
    <>
      <div className="p-2 movie-details-container">
        <div className="position-absolute text-white card-details">
          <h1 className="text-uppercase fs-3">
            ANT-MAN AND THE WASP: QUANTUMANIA
          </h1>
          <div className="mb-3 lh-1">
            <span className="d-inline-block pe-3">Adventure</span>
            <span className="d-inline-block px-3">Comedy</span>
            <span className="d-inline-block ps-3">Science Fiction</span>
          </div>
          <button className="bg-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-play"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />{" "}
            </svg>{" "}
          </button>
          <p className="mt-3">
            Super-Hero partners Scott Lang and Hope van Dyne, along with with
            Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter
            Cassie Lang, find themselves exploring the Quantum Realm,
            interacting with strange new creatures and embarking on an adventure
            that will push them beyond the limits of what they thought possible.
          </p>
        </div>
      </div>
      <Image />
    </>
  );
}
