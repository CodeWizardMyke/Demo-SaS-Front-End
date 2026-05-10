
export const getStorageItems = (local,item,dataType) => {

    let data = undefined;

    if(local === "session"){
        data = sessionStorage.getItem(item);
    }else{
        data = localStorage.getItem(item);
    };

    if(dataType === "parse"){
        data = JSON.parse(data);
    }

    return data;
};
