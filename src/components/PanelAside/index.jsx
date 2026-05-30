
import './styles.css'
import PanelProdDetails from '../product/PanelProdDetails';
import CreateCategoryOrBrand from '../product/createCategoryOrBrand';

const PanelAside = ({activeCreateForm,createForm,activeSideBar}) => {

    const OPENED_VIEWS = {

        1: (
            <PanelProdDetails/>
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
            className={`aside-container ${activeSideBar && 'aside-closed'}`}
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
