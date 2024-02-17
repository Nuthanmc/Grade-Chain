import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "@/config/firebase";

// Custom hook for setInterval with cleanup
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const InstitutesCounter = () => {
  const [count, setCount] = useState(0);
  const [docsLength, setDocsLength] = useState(0);
  useEffect(() => {
    const colRef = collection(db, "institutes");
    getDocs(colRef).then((snapshot) => {
      setDocsLength(snapshot.size);
    });
  }, []);

  useInterval(() => {
    if (count < docsLength) {
      setCount((prevCount) => prevCount + 1);
    }
  }, 25); // Interval duration in milliseconds

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span className="text-4xl w-1/2 font-bold text-center">
          Institutes Registered
        </span>
        <h3 style={{ fontSize: "3rem" }}>{count}</h3>
      </div>
    </>
  );
};

export default InstitutesCounter;
