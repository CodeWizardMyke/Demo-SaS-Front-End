import { WorkspaceContext } from "contexts/WorkspaceContext";
import { useContext } from "react";

import "./styles.css";

const QuickActions = ({ actions = [] }) => {
    const {openTab} = useContext(WorkspaceContext)
    
    return (
        <section className="dashboard-panel">

            <header className="dashboard-panel-header">
                <h3>Ações Rápidas</h3>
            </header>

            <div className="quick-actions">

                {actions.map((action, index) => (
                    <button
                        key={index}
                        className="quick-action"
                        onClick={()=> openTab(action)}
                    >
                        <span className="quick-action-icon">
                            {action.icon}
                        </span>

                        <span className="quick-action-label">
                            {action.text}
                        </span>
                    </button>
                ))}

            </div>

        </section>
    );
};

export default QuickActions;
