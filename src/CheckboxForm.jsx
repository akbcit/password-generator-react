/* eslint-disable react/prop-types */

import { useState } from "react";

function CheckBoxForm({ formItems,onCheckBoxInputChange}) {
    const formInputs = {};
    // Convert array to object 
    formItems.map((item)=>{formInputs[item]=false});
    // State management for form inputs
    const [checkBoxInputs, setCheckBoxInputs] = useState(formInputs);
    // Handle input change
    const handleChange = (item)=>{
        const prevInputs = {...checkBoxInputs};
        prevInputs[item] = !prevInputs[item];
        setCheckBoxInputs(prevInputs);
        onCheckBoxInputChange(prevInputs);
    };

  return (
    <>
      <div id="checkbox-group">
        {formItems.map((item, index) => (
          <div key={index} className="form-check">
            <input
              id={`${item}-input`}
              className="form-check-input"
              type="checkbox"
              checked = {checkBoxInputs[item]}
              key={`${item}-input`}
              onChange={() => handleChange(item)}
            />
            <label
              htmlFor={`${item}-input`}
              className="form-check-label"
              key={`${item}-label`}
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheckBoxForm;