/* eslint-disable react/prop-types */

import { useState } from "react";

function LengthInput({ min, max,onLengthInputChange}) {
  const [lengthInput, setLengthInput] = useState(min);

  const handleChange = (event)=>{
    const value = event.target.value;
    setLengthInput(value);
    onLengthInputChange(value);
  }

  return (
    <>
      <div className="form-outline">
        <input
          min={min}
          max={max}
          type="number"
          id="typeNumber"
          className="form-control"
          onChange = {()=>{
            handleChange(event)
          }}
        />
        <label className="form-label" htmlFor="typeNumber">
          Password Length
        </label>
      </div>
    </>
  );
}

export default LengthInput;
