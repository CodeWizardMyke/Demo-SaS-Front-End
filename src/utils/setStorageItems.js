
export const setStorageItems = (data,local) => { 

    if(!data){
        return {dataUser:false,token:false}
    }

    const {user,token} = data;

    if(!user || !token){
        return {dataUser:false,token:false}
    }

    const dataUser = JSON.stringify(user);

    if(local === "local"){
        localStorage.setItem("user",dataUser);
        localStorage.setItem("token",token);
    }else{
        sessionStorage.setItem("user",dataUser);
        sessionStorage.setItem("token",token);
    }

    return {dataUser,token}

};