import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
      className="button px-3 py-1 rounded fs-6 my-3"
    >
      <i className="fa-solid fa-arrow-left"></i> Zurück
    </button>
  );
}

export default BackButton;
