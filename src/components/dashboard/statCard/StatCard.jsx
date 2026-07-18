import "./styles.css";

const StatCard = ({
    title,
    value = 0,
    icon,
    description,
    variation,
    variationType = "neutral",
    onClick
}) => {

    return (
        <article
            className="stat-card"
            onClick={onClick}
        >

            <header className="stat-card-header">

                <div>

                    <span className="stat-card-title">
                        {title}
                    </span>

                    <h2 className="stat-card-value">
                        {value}
                    </h2>

                </div>

                {
                    icon &&
                    <div className="stat-card-icon">
                        {icon}
                    </div>
                }

            </header>

            {
                description &&
                <p className="stat-card-description">
                    {description}
                </p>
            }

            {
                variation &&
                <footer
                    className={`stat-card-footer ${variationType}`}
                >
                    {variation}
                </footer>
            }

        </article>
    );
};

export default StatCard;