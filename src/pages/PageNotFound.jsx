import BackButton from "../components/BackButton";

function PageNotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2>
        Oooops! <br></br>Diese Seite existiert nicht!
      </h2>
      <div className="d-flex align-content-end ">
        <BackButton />
      </div>
    </div>
  );
}

export default PageNotFound;
