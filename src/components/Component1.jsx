import { useEffect } from "react";
import { useState } from "react";
import { memo } from "react";
import ProtectedRoute from "./ProtectedRoute";

const Component1 = memo((props) => {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  }, [data]);
  console.log("Component 1 rendered");
  return (
    <>
      <div className="bg-white">
        <div>This is Component1</div>
        <div className="flex gap-2.5">
          {props.data.map((item) => (
            <span className="">{item}</span>
          ))}
        </div>
      </div>
    </>
  );
});

export default Component1;
