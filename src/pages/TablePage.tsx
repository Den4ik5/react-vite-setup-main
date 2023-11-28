import {Row} from "../interfaces/RowInterface.ts";

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'data',
        headerName: 'Row',
        width: 150,
    },
]

export const TablePage = () => {
    const data: Row[] = [
        {
            id: '1',
            data: '1'
        },
        {
            id: '2',
            data: '2'
        },
    ];

    return (
        <>
            {/*<DataTable data={data} columns={columns}></DataTable>*/}
        </>
    )
}

