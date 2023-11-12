  
  // Function to check sufficiency
  function CheckSufficiency(checkBoxValues){
    if((checkBoxValues["Lowercase"]===false)&&(checkBoxValues["Uppercase"]===false)){
      return false;
    }
    else{
      return true;
    }
  }

  export default CheckSufficiency;