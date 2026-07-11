import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const WorkspaceContext = createContext();

export function WorkspaceProvider({children}){
    const [openedTabs,setOpenedTabs] = useState([]);
    const [validationErrors, setValidationErrors] = useState(null);
    const [modalSucess, setModalSucess] = useState(false);
    const [activeSideBar, setActiveSideBar] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    function openTab(tab){

        const existsTab = openedTabs.find(
            item => item.path === tab.path
        );

        if(!existsTab){
            setOpenedTabs(prev => [...prev, tab]);
        }

        navigate(tab.path);
    }

    function closeTab(path){

        const filtered = openedTabs.filter(
            item => item.path !== path
        );

        setOpenedTabs(filtered);

        if(location.pathname === path){

            const lastTab = filtered[filtered.length - 1];

            if(lastTab){
                navigate(lastTab.path);
            }else{
                navigate('/app');
            }
        }
    }
    
    function toggleSideBar(value) {
        if(value){
            setActiveSideBar(value);
        }else{
            setActiveSideBar(!activeSideBar);
        }
    }

    return(
        <WorkspaceContext.Provider
            value={{
                openedTabs,
                openTab,
                closeTab,
                activeSideBar,
                toggleSideBar,
                loading, setLoading,
                validationErrors, setValidationErrors,
                modalSucess, setModalSucess
            }}
        >
            {children}
        </WorkspaceContext.Provider>
    );
};