
import './styles.css'
import AsideProduct from '../product/asideContents';
import CreateCategoryOrBrand from '../product/createCategoryOrBrand';

const PanelAside = ({modalCreate,setModalCreate,activeSideBar}) => {

    console.log(modalCreate)


    return (
       <div  
            className= {

                `${ activeSideBar === false && 'aside-closed'} 

                aside-container`
        }>
        
            <aside  className="panel-aside" >
        
                {
                    !!modalCreate 
                    
                    ? <CreateCategoryOrBrand 
                        modalCreate={modalCreate} 
                        setModalCreate={setModalCreate} 
                    />

                    : <AsideProduct/>        
                    
                }

            </aside>
        
       </div>
    );
}


export default PanelAside;
