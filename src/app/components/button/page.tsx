"use client";

import React from 'react'

interface ButtonPropType {
    rizwan : string;
    greeting? : boolean;

    bio : {
        id : number;
        adrees : string;
        phone : number;
    };
}


const Button = ({rizwan , greeting , bio} : ButtonPropType) => {
    console.log("Rizwan ==>" , rizwan);
    console.log("bio ==>" , bio);
    console.log("greeting ==>", greeting);
    
    return<div>{rizwan}</div>
};

export default Button;

