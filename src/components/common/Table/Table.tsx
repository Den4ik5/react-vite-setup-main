import {FunctionComponent} from "react";
import type {ColumnsType} from 'antd/es/table';
import {Table} from "antd";

interface TableProps {
    // Data could be any type it depends on Columns def
    data: any,
    columns: ColumnsType<any>,
}

export const DataTable: FunctionComponent<TableProps> = (props) => {
    const {data, columns} = props
    console.log(data);
    console.log(columns);

    return (
        <div>
            <Table columns={columns} dataSource={data}/>
        </div>
    )
}