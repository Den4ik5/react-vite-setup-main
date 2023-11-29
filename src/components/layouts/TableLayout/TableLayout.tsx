import {ColumnsType} from "antd/es/table";
import {DataTable} from "../../common/Table";
import {User} from "../../../interfaces/UserInterface.ts";
import {useDeleteUserMutation, useGetAllUsersQuery} from "../../../api/userApi.ts";
import {TableRouterCell} from "../../common/TableRouterCell";
import DeleteIcon from "@mui/icons-material/Delete";
import {useMemo} from "react";


export const TableLayout = () => {
    const {data, error, isLoading} = useGetAllUsersQuery(null);
    console.log(data);
    console.log(error);
    console.log(isLoading);
    const [deleteUser] = useDeleteUserMutation()

    const columns: ColumnsType<User> = useMemo(() => [
        {
            key: 'redirect',
            title: 'Redirect',
            render: (value) => {
                return <TableRouterCell url={`/edit/${value.id}`}></TableRouterCell>
            }
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => +a.id - +b.id,
        },
        {
            title: 'Row',
            dataIndex: 'data',
            key: 'data',
        },
        {
            key: 'delete',
            title: 'Delete',
            render: (value) => {

                const onclick = () => {
                    deleteUser(value.id)
                }
                return <DeleteIcon onClick={onclick} style={{cursor: 'pointer'}}></DeleteIcon>
            }
        }
    ], [])

    return (
        <>
            {!isLoading ? <DataTable data={data} columns={columns}></DataTable>
                : <div>Loading</div>
            }
        </>
    )
};
