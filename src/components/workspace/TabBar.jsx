import React, { useContext } from 'react';

import TabItem from './TabItem';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

const TabBar = () => {
    const {openedTabs} = useContext(WorkspaceContext);

    return (
        <ul>
            {
                openedTabs.map(item => 
                <TabItem
                    item={item}
                />
            )
            }
        </ul>
    );
}

export default TabBar;
