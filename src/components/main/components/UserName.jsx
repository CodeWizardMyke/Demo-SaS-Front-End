import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const UserName = ({user}) => {
    const [name,setName] = useState("");

    useEffect(()=>{
        if(user){ setName(user.name); }
    },[user])

    return (
        <div style={style.text}>
            {name}
            <IoIosArrowForward style={style.svg} />
        </div>
    );
}

const style = {
    text:{
        padding:"0 15px",
        display:"flex",
        alignItems:"center",
        cursor:"pointer"
    },
    svg:{
        fontSize:"14pt",
        marginLeft:"5px",
        height: '15px',
        widht: '15px',
        transform: "rotate(90deg)"
    }
}


export default UserName;
