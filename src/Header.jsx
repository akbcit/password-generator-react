/* eslint-disable react/prop-types */

import { useState } from "react";   

function Header({title}){
    
    return <>
    <h2 id="header">{title}</h2>
    </>
}

export default Header;