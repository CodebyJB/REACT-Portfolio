import BackButton from "../components/BackButton";

import dsvgoData from "../data/dsvgoData.json";

function Datenschutz() {
  return (
    <div className="col-sm-10 p-4 mx-auto">
      <div dangerouslySetInnerHTML={{ __html: dsvgoData.content }} />
      <div className="d-flex justify-content-end ">
        <BackButton />
      </div>
    </div>
  );
}

export default Datenschutz;
