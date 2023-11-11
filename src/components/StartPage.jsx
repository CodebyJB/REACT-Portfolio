import Loader from "./Loader";

function StartPage({ visible }) {
  return (
    <div
      className={`startpage overflow-hidden position-absolute top-0 start-0 bottom-0 end-0 dvh-100 vw-100 ${
        visible ? "" : "fade-out"
      }`}
    >
      <Loader />
    </div>
  );
}

export default StartPage;
