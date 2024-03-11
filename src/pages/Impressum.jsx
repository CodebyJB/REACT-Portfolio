import BackButton from "../components/BackButton";

import impressumData from "../data/impressumData.json";

function Impressum() {
  return (
    <div className="col-sm-10 p-4 mx-auto impressum">
      <div dangerouslySetInnerHTML={{ __html: impressumData.content }} />
      <div className="d-flex justify-content-end">
        <BackButton />
      </div>
    </div>
  );
}

export default Impressum;
