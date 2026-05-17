import React, { useState } from 'react';

import './styles/MainSideBar.css'
import SearchField from '../search/SearchField';
import ItemList from './components/ItemList';

import modules from '../../configs/sidebar/modules'

const MainSideBar = () => {
    const [query, setQuery] = useState('');
    const [openedModule, setOpenedModule] = useState(null);

    const filteredModules = modules.filter(module =>
        module.text.toLowerCase().includes(query.toLowerCase())
    );

    const handleToggle = (id) => {
        setOpenedModule(prev => prev === id ? null : id);
    };

    return (
        <aside className='aside'>
            <div className="asideTopContent">
                <div className="services"></div>
                <SearchField setQuery={setQuery} />
            </div>
           <nav className="asideMainBody">
                <h3>Modulos</h3>
                {
                    filteredModules.map(module => (

                        module.visible && (

                            <ul className="module" key={module.id}>

                                <ItemList
                                    text={module.text}
                                    path={module.path}
                                    iconArrow={true}
                                    onClick={() => handleToggle(module.id)}
                                />

                                {
                                    openedModule === module.id && (

                                        <ul className='listContent'>

                                            {
                                                module.children.map(item => (

                                                    <ItemList
                                                        text={item.text}
                                                        path={item.path}
                                                        iconArrow={false}
                                                        opened={openedModule === module.id}
                                                        onClick={() => handleToggle(module.id)}
                                                    />

                                                ))
                                            }

                                        </ul>

                                    )
                                }

                            </ul>

                        )

                    ))
                }

            </nav>
        </aside>
    );
}

export default MainSideBar;
