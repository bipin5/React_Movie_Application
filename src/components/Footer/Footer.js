import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCodeBranch,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="d-flex flex-column flex-sm-row align-items-center mt-5 mb-4 bg-opacity-75 justify-content-around">
      <div className="d-flex align-items-center">
        <div className="fs-4 me-2">
          <FontAwesomeIcon icon={faCopyright} />
        </div>
        <div>
          <span className="text-white"> Copyright @ Bipin Dahal</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="fs-4 me-2">
          <FontAwesomeIcon icon={faCodeBranch} />
        </div>
        <div>
          <span className="text-white"> App Version 1.0.0</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="fs-4 me-2">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div>
          <span className="text-white"> Release Date 2023</span>
        </div>
      </div>
    </footer>
  );
}
