import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {FunctionComponent} from "react";


export interface TableProps {
    // Data could be any type it depends on Columns def
    data: any[],
    columns: GridColDef[]
}

export const DataTable: FunctionComponent<TableProps> = (props) => {
    const {data, columns} = props
    console.log(data);
    console.log(columns);
    return (
        <div>
            <DataGrid
                rows={data}
                columns={columns}
                checkboxSelection
            ></DataGrid>
        </div>
    )
}