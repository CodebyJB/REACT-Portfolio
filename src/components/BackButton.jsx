import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className="px-3 py-1 rounded fs-5 my-3"
    >
      <i className="fa-solid fa-arrow-left"></i> Back
    </button>
  );
}

export default BackButton;
