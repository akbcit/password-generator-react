import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import CheckBoxForm from "./CheckboxForm";
import LengthInput from "./LengthInput";
import Button from "./Button";
import CheckSufficiency from "./utility/CheckSufficiency";
import PasswordGenerator from "./utility/PasswordGenerator";

function App() {
  const [title, setTitle] = useState("Password Generator");
  const formItems = ["Symbols", "Number", "Lowercase", "Uppercase"];
  const minLength = 8;
  const maxLength = 20;

  // State management for checkbox values
  const [checkBoxValues,setCheckBoxValues] = useState({
    "Symbols":false,
    "Number": false,
    "Lowercase":false,
    "Uppercase":false,
  });

  const [isSufficient,setIsSufficient] = useState(false);

  // State management for password length
  const[passwordLength,setPasswordLength] = useState(8);
  
  // State management for password length
  const[password,setPassword] = useState("");

  // Get Length input
  const getLengthInput = (lengthInput)=>{
    setPasswordLength(lengthInput);
  };
  // Get Checkbox input
  const getCheckBoxInput = (checkBoxInput)=>{
    const newCheckBoxValues = {...checkBoxInput};
    setCheckBoxValues(newCheckBoxValues);
  };

  // UseEffect to checkSufficiency
  useEffect(()=>{setIsSufficient(CheckSufficiency(checkBoxValues))},[checkBoxValues]);

  // Get Password
  const getPassword = ()=>{
    if(isSufficient){
      setPassword(PasswordGenerator(checkBoxValues,passwordLength))
    }
  };

  return (
    <>
      <div id="box">
        <Header title={title} />
        <div id="output">
          <Button onClick={getPassword}/>
          <p>{!isSufficient?`Please select at least one of 'Lowercase' and 'UpperCase'.`:`Press 'Generate' to get a new password`}</p>
          <p id = "password-output">{password}</p>
        </div>
        <div id="form-group">
          <LengthInput min={minLength} max={maxLength} onLengthInputChange = {getLengthInput}/>
          <CheckBoxForm formItems={formItems} onCheckBoxInputChange = {getCheckBoxInput}/>
        </div>
      </div>
    </>
  );
}

export default App;
