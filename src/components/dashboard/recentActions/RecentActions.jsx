import { TbEdit, TbPackage } from "react-icons/tb";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import "../styles.css";

const RecentActions = ({ actions = [] }) => {

    const handlerLastTime = (date) => {

        return formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR
        });

    };

    return (
        <section className="dashboard-panel ds-border">

            <header className="dashboard-panel-header">
                <h3>Atividades Recentes</h3>
            </header>

            <ul className="recent-actions">

                {actions.map((item, index) =>
                {
                    const { createdAt,updatedAt } = item;

                    const lastTime = updatedAt === createdAt 
                            ? {created:true,date:createdAt}
                            : {updated:true,date:updatedAt}

                    return (
                        <li
                            key={index}
                            className="recent-action"
                        >

                            <div className="recent-action-icon">
                                {
                                   lastTime.created
                                        ? <TbPackage/>
                                        : <TbEdit/>
                                }
                            </div>

                            <div className="recent-action-content">

                                <strong>{item.title}</strong>

                                <span>{item.description}</span>

                            </div>

                            <small>
                                {
                                    handlerLastTime(lastTime.date)
                                }
                            </small>

                        </li>

                    )
                })}

            </ul>

        </section>
    );

};

export default RecentActions;
