import React, { useState } from 'react';

import './SideBar.css'
import SearchField from '../search/SearchField';
import ItemList from './SideBarItem';

import modules from '../../configs/sidebar/modules'

const SideBar = () => {
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
                                                module.routes.map(item => (
                                                    
                                                    <ItemList
                                                        item={item}
                                                        key={item.id}
                                                        text={item.text}
                                                        path={item.path}
                                                        iconArrow={false}
                                                        opened={openedModule === module.id}
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

export default SideBar;
