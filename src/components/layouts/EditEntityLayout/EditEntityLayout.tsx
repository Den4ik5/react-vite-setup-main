import {useParams} from "react-router-dom";
import {useGetUserQuery} from "../../../api/userApi.ts";
import {Form, FormProps} from "../../common/Form";

export const EditEntityLayout = () => {
    const {userId} = useParams();
    console.log(userId);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, error, isLoading} = useGetUserQuery(userId);
    console.log(data);
    console.log(error);

    const editEntityFormConfig: FormProps = {
        fields: [
            {
                inputType: "text",
                name: 'first name',
                variant: "outlined",
                required: true,
                requiredMessage: 'Name is required',
                label: 'first name',
            },
            {
                inputType: "text",
                name: 'last name',
                variant: "outlined",
                required: true,
                requiredMessage: 'Last Name is required',
                label: 'last name',
            },
            {
                inputType: "number",
                name: 'age',
                variant: "outlined",
                required: true,
                requiredMessage: 'Age is required',
                label: 'age',
            },
            {
                inputType: "email",
                name: 'email',
                variant: "outlined",
                required: true,
                label: 'email',
            },
            {
                inputType: "radio",
                name: 'gender',
                variant: "outlined",
                required: true,
                label: 'gender',
            },
        ],
        header: {
            text: 'Edit User' + data?.id
        },
        actions: [
            {
                name: 'cancel',
                action: () => {
                    alert(1)
                },
                variant: "outlined"
            },
            {
                name: 'submit',
                action: () => {
                    alert(2)
                },
                variant: "outlined"
            }
        ]
    }
    return (
        <>
            {isLoading ? <div>Loading</div> :
                <Form
                    fields={editEntityFormConfig.fields}
                    header={editEntityFormConfig.header}
                    actions={editEntityFormConfig.actions}>
                </Form>
            }
        </>
    )
};
