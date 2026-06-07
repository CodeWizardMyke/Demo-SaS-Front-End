
import './styles.css'
import AsideProduct from '../product/asideContents';
import CreateCategoryOrBrand from '../product/createCategoryOrBrand';

const PanelAside = ({activeCreateForm,createForm,activeSideBar}) => {

    let cssToggleAside =  activeSideBar === false && 'aside-closed'

    const OPENED_VIEWS = {

        1: (
            <AsideProduct/>
        ),

        2: (
          <CreateCategoryOrBrand 
                activeCreateForm={activeCreateForm} 
                createForm={createForm} 
            />  
        )
    };

    return (
       <div 
            className={`${cssToggleAside} aside-container`}
        >
        
            <aside 
                className="panel-aside"
            >
        
                { OPENED_VIEWS[ activeCreateForm ? 2 : 1 ] }
        
            </aside>
        
       </div>
    );
}


export default PanelAside;
