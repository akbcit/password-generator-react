/* eslint-disable react/prop-types */

import { useState } from "react";

function Button({onClick}) {
  return (
    <>
    <button type="button" className="btn btn-dark" id="generate-btn" onClick = {onClick}>Generate!</button>
    </>
  );
}

export default Button;