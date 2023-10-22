import BackButton from "../components/BackButton";
import dsvgoData from "../data/dsvgoData.json";

function Datenschutz() {
  return (
    <div className="col-sm-10 p-4 mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: dsvgoData.content }}
        className="text-justify"
      />
      <BackButton />
    </div>
  );
}

export default Datenschutz;
