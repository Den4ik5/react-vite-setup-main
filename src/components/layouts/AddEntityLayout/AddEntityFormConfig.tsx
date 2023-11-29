import {FormProps} from "../../common/Form";

export const ADD_ENTITY_FORM_CONFIG: FormProps = {
    fields: [
        {
            inputType: "text",
            name: 'first name',
            variant: "outlined",
            required: true,
            label: 'first name',
        },
        {
            inputType: "text",
            name: 'last name',
            variant: "outlined",
            required: true,
            label: 'last name',
        },
        {
            inputType: "number",
            name: 'age',
            variant: "outlined",
            required: true,
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