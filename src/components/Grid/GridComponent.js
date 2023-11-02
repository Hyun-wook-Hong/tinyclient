import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

/* ag-grid docs URL: https://www.ag-grid.com/react-data-grid */

const GridComponent = ({ rowData,
                         columnDefs }) => {
    const gridRef = useRef();
    
    const [mRowData] = useState(rowData);

    const [mColumnDefs] = useState(columnDefs);

    return(
        <div className="ag-theme-alpine" style={{ height: 300, width: 300 }}>
            <AgGridReact
                ref={gridRef}
                rowData={mRowData}
                columnDefs={mColumnDefs}
            />
        </div>
    );
}

export default GridComponent;