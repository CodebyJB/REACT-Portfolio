import BackButton from "../components/BackButton";
import impressumData from "../data/impressumData.json";

function Impressum() {
  return (
    <div>
      Impressum
      <div dangerouslySetInnerHTML={{ __html: impressumData.content }} />
      <BackButton />
    </div>
  );
}

export default Impressum;
