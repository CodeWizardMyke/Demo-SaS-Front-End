import React from 'react';
import SideBarItem from './SideBarItem';

const SideBarNav = ({
    filteredModules,
    modules,
    openedModule,
    handleToggleModule
}) => {
    return (
      <nav className="asideMainBody">
                <h3>Modulos</h3>
                {
                    filteredModules.map(module => (

                        module.visible && (

                            <ul className="module" key={module.id}>

                                <SideBarItem
                                    text={module.text}
                                    path={module.path}
                                    iconArrow={true}
                                    onClick={() => handleToggleModule(module.id)}
                                />

                                {
                                    openedModule === module.id && (

                                        <ul className='listContent'>

                                            {
                                                module.routes.map(item => (
                                                    
                                                    <SideBarItem
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
    );
}

export default SideBarNav;
