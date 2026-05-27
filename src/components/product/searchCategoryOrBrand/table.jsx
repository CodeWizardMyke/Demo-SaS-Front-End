import React from 'react';

const TableResult = ({data,click,selectedValue}) => {
    return (
       <div className="table-content">
                <h4>Resultados</h4>
                  <table>
                <thead>
                      <tr>
                            <th>id:</th>
                            <th>Name:</th>
                      </tr>
                </thead>
                <tbody>
                   {
                    data.length > 0 
                    ? (
                        data.map((item) => {
                            const id = 
                                item.brand_id ||
                                item.category_id;

                            const name = 
                                item.brand_name ||
                                item.category_name;
                            return(
                                <tr
                                    key={id}
                                    onClick={()=> click(item)}
                                    className={selectedValue === name ? 'active-row' : ""}
                                >
                                    <td>{id}</td>
                                    <td>{name}</td>
                                </tr>
                            )

                        })
                    )
                    : (<tr><td>Nenum resultado encontrado</td><td></td></tr>)
                   }
                </tbody>
            </table>
        </div>
    );
}

export default TableResult;
