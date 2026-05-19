import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const WorkspaceContext = createContext();

export function WorkspaceProvider({children}){
    const [openedTabs,setOpenedTabs] = useState([]);
    const [activeTab,setActiveTab] = useState(null);
    const navitage = useNavigate();


    function openTab(tab){
        
        const existisTab = openedTabs.find(
            item => item.path === tab.path
        );

        if(!existisTab){
            setActiveTab(prev => [...prev, tab]);
        };

        setActiveTab(tab.path);

        navigate(tab.path);

    };

    function closeTab(path){

        const filtered = openedTabs.filter(
            item => item.path !== path
        );

        setActiveTab(filtered);

        if(activeTab === path){
            const lastTab = filtered[filtered.length -1];

            if(lastTab){
                navitage(lastTab.path);
                setActiveTab(lastTab.path);
            }else{
                navitage('/app');
            };
        };
    };

    return(
        <WorkspaceContext.Provider
            value={{
                openedTabs,
                activeTab,
                openTab,
                closeTab,
            }}
        >
            {children}
        </WorkspaceContext.Provider>
    );
};