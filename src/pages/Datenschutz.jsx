import BackButton from "../components/BackButton";
import dsvgoData from "../data/dsvgoData.json";

function Datenschutz() {
  return (
    <div>
      Datenschutz
      <div dangerouslySetInnerHTML={{ __html: dsvgoData.content }} />
      <BackButton />
    </div>
  );
}

export default Datenschutz;
