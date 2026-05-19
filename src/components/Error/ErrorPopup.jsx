import React, { useEffect, useState } from 'react';

const ErrorPopup = ({errMsg,setErrMsg}) => {
    const [toggle,setToggle] = useState(false)

    useEffect(()=>{
        if(errMsg){
            setToggle(true);
        }
    },[errMsg])

    function closePopUp(){
        setErrMsg(null);
        setToggle(false);
    };

    return (
        toggle && (
        <dialog style={style.popup}>
            <h3>Erro na solicitação com o serviço.</h3>
            <p style={style.spaceP}>{errMsg}</p>
            <button
                onClick={()=> closePopUp()}
                type='button'
                className='btn-df'
            >
                Fechar
            </button>
        </dialog>
        )
    );
}

const style={
    popup:{
        maxWidth:"500px",width:"100%",
        minHeigth:"200px",
        display:"flex",
        flexDirection:"column",
        padding:"10px 20px",
        justifyContent:"space-between",
        position:"fixed",
        top:"50px",
        margin:"0px auto",
        textAlign:"center",
        border:"1px solid #c1c1c1",
        borderRadius:"5px",
        zIndex:"100"
    },

    spaceP:{
        minHeight:"45px",
        padding:"10px 0"
    }
}

export default ErrorPopup;
