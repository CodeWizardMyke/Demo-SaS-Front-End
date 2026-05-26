import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const WorkspaceContext = createContext();

export function WorkspaceProvider({children}){
    const [openedTabs,setOpenedTabs] = useState([]);
    const [activeTab,setActiveTab] = useState(null);
    const [activeSideBar, setActiveSideBar] = useState(false);
    const navigate = useNavigate();


    function openTab(tab){

        const existisTab = openedTabs.find(
            item => item.path === tab.path
        );
        
        if(!existisTab){
            setOpenedTabs(prev => [...prev, tab]);
        };
        setActiveTab(tab.path);

        navigate(tab.path);
    };

    function closeTab(path){
        
        const filtered = openedTabs.filter(
            item => item.path !== path
        );
        
        setOpenedTabs(filtered);

        if(activeTab === path){
            const lastTab = filtered[filtered.length -1];

            if(lastTab){
                navigate(lastTab.path);
                setActiveTab(lastTab.path);
            }else{
                navigate('/app');
            };
        };
    };
    
    function togglePanelAside() {
        setActiveSideBar(!activeSideBar);
    }

    return(
        <WorkspaceContext.Provider
            value={{
                openedTabs,
                activeTab,
                openTab,
                closeTab,
                togglePanelAside,
                activeSideBar
            }}
        >
            {children}
        </WorkspaceContext.Provider>
    );
};