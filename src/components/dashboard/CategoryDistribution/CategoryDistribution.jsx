import "./styles.css";

const CategoryDistribution = ({ data = [] }) => {

    const total = data.reduce(
        (acc, item) => acc + item.value,
        0
    );

    return (
        <section className="dashboard-panel">

            <header className="dashboard-panel-header">
                <h3>Distribuição do Catálogo</h3>
            </header>

            <div className="category-distribution">

                {data.map((item, index) => {

                    const percentage =
                        total === 0
                            ? 0
                            : Math.round((item.value / total) * 100);

                    return (

                        <div
                            className="distribution-item"
                            key={index}
                        >

                            <div className="distribution-header">

                                <span>
                                    {item.icon}
                                    {item.label}
                                </span>

                                <strong>
                                    {item.value}
                                </strong>

                            </div>

                            <div className="distribution-progress">

                                <div
                                    className="distribution-bar"
                                    style={{
                                        width: `${percentage}%`
                                    }}
                                />

                            </div>

                            <small>
                                {percentage}% do catálogo
                            </small>

                        </div>

                    );

                })}

            </div>

        </section>
    );

};

export default CategoryDistribution;
