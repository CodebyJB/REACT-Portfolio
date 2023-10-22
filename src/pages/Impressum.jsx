import BackButton from "../components/BackButton";
import impressumData from "../data/impressumData.json";

function Impressum() {
  return (
    <div className="col-sm-10 p-4 mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: impressumData.content }}
        className="text-justify"
      />
      <BackButton />
    </div>
  );
}

export default Impressum;
