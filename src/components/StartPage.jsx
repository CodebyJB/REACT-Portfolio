import Loader from "./Loader";

function StartPage({ visible }) {
  return (
    <div
      className={`startpage overflow-hidden position-absolute top-0 start-0 bottom-0 end-0 ${
        visible ? "" : "opacity-0"
      }`}
    >
      <Loader />
    </div>
  );
}

export default StartPage;
