import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const UserName = ({ user }) => {

    function capitalize(text = "") {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    let formattedName = "";

    if(user?.name){

        const parts = user.name.trim().split(" ");

        formattedName = capitalize(parts[0]);

        if(parts[1]){
            formattedName += " " + capitalize(parts[1]);
        }

        if(formattedName.length > 15){
            formattedName = formattedName.slice(0,15) + "...";
        }
    }

    return (
        <div style={style.text}>
            {formattedName}

            <IoIosArrowForward style={style.svg} />
        </div>
    );
}

const style = {
    text:{
        margin:"0 15px",
        display:"flex",
        alignItems:"center",
        cursor:"pointer",
        maxWidth:"200px",
        width:"100%",
    },

    svg:{
        fontSize:"14pt",
        marginLeft:"5px",
        height:'15px',
        width:'15px',
        transform:"rotate(90deg)"
    }
}

export default UserName;