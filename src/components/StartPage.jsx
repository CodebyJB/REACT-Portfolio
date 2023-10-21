import { useEffect, useState } from "react";
import Loader from "./Loader";

function StartPage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`startpage overflow-hidden position-absolute top-0 start-0 bottom-0 end-0 ${
        visible ? "" : "opacity-0"
      }`}
    >
      {visible && <Loader />}
    </div>
  );
}

export default StartPage;
