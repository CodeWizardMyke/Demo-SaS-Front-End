
import './styles.css'
import PanelProdDetails from '../product/PanelProdDetails';
import CreateCategoryOrBrand from '../product/createCategoryOrBrand';

const PanelAside = ({activeCreateForm,createForm}) => {

    return (
        <aside className='panel-aside'>
            {
                !activeCreateForm 
                    ? <PanelProdDetails/>
                    :(
                        <CreateCategoryOrBrand 
                            activeCreateForm={activeCreateForm} 
                            createForm={createForm} 
                        />
                    )
            }
        </aside>
    );
}

export default PanelAside;
