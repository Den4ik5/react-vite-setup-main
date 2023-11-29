import {Form, FormProps} from "../../common/Form";

export const AddEntityLayout = () => {
    const addEntityFormConfig: FormProps = {
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
            text: 'Add User'
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
        <Form
            fields={addEntityFormConfig.fields}
            header={addEntityFormConfig.header}
            actions={addEntityFormConfig.actions}>
        </Form>
    )
}

