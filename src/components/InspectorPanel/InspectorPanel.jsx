import './styles.css';

const InspectorPanel = ({ active, children }) => {
    return (
        <aside className={`cl-inspector ${ active ? "active" : ""}`}>
            <div className={`inspector-panel ${ active ? "active" : ""}`}>
                {children}
            </div>
        </aside>
    );

}

export default InspectorPanel;