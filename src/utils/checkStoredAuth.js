import { getStorageItems } from "./getStorageItems";

export const checkStoredAuth = () => {

    const storedToken = getStorageItems("session","token") || getStorageItems("local","token");
    let storedUser = getStorageItems("session","user","parse") || getStorageItems("local","user","parse");
   
    const storedAuth = {
        user:storedUser,
        token:storedToken,
        userAuth: storedToken && storedUser ? true : false
    };

    return storedAuth;
};