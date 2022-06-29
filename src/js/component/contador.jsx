import React, { useState, useEffect } from "react";

//create your first component
const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [hora, setHora] = useState(0);
  const [start, setStart] = useState("parar");
  useEffect(() => {
    if (start === "empezar") {
      setTimeout(contador, 100);
    } else if (start === "parar") {
      clearInterval(count);
    }

    function contador() {
      setCount(count + 1);
    }
  });
  useEffect(() => {
    if (count === 60) {
      setCount(0);
      setMin(min + 1);
    }
    if (min === 60) {
      setHora(hora + 1);
    }
  }, [count]);

  return (
    <div className="container">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          </div>
          <div className="d-flex my-5 justify-content-center">
            <h1>
              <span>{Math.floor(hora)}:</span>

              <span>{Math.floor(min)}:</span>

              <span>{Math.floor(count)}</span>
            </h1>
          </div>
          <button
            className="btn btn-success mx-3"
            onClick={() => setStart("empezar")}
          >
            Start
          </button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => setStart("papar")}
          >
            Stop
          </button>
          <button
            className="btn btn-secondary mx-3"
            onClick={() => {
              setCount(0);
              setMin(0);
              setHora(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCounter;
