import { TbEdit, TbPackage } from "react-icons/tb";
import {
    formatDistanceToNow,
    isValid
} from "date-fns";
import { ptBR } from "date-fns/locale";

import "../styles.css";

const RecentActions = ({ actions = [] }) => {

    const handlerLastTime = (date) => {

        const parsedDate = new Date(date);

        if (!isValid(parsedDate)) {
            return "Data indisponível";
        }

        return formatDistanceToNow(parsedDate, {
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

                {actions.map((item) => {

                    const isCreated = item.action === "created";

                    return (
                        <li
                            key={item.product_id}
                            className="recent-action"
                        >

                            <div className="recent-action-icon">
                                {
                                    isCreated
                                        ? <TbPackage />
                                        : <TbEdit />
                                }
                            </div>

                            <div className="recent-action-content">

                                <strong title={item.title}>
                                    {item.title}
                                </strong>

                                <span>
                                    {
                                        isCreated
                                            ? "Produto cadastrado"
                                            : "Produto atualizado"
                                    }
                                </span>

                            </div>

                            <small>
                                {handlerLastTime(item.date)}
                            </small>

                        </li>
                    );
                })}

            </ul>

        </section>
    );
};

export default RecentActions;