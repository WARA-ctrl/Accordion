import { useState } from "react";
import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";

const SingleContent = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setShowContent(!showContent);
          }}
          className="btn"
        >
          {showContent ? <BsFillPatchMinusFill /> : <BsFillPatchPlusFill />}
        </button>
      </header>
      {showContent && <p>{description}</p>}
    </article>
  );
};

export default SingleContent;
