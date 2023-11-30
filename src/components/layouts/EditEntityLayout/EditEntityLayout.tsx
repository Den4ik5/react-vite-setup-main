import {useParams} from "react-router-dom";
import {useGetUserQuery} from "../../../api/userApi.ts";
import {Controller, useForm} from "react-hook-form";
import {User} from "../../../interfaces";
import {TextField} from "@mui/material";
import {useEffect, useMemo} from "react";
import {GetUserResponse} from "../../../api/types.ts";
import Button from "@mui/material/Button";

// export const EditEntityLayout = () => {
//     const {userId} = useParams();
//     console.log(userId);
//
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-expect-error
//     const {data, error, isLoading} = useGetUserQuery(userId);
//     console.log(data);
//     console.log(error);
//
//     const editEntityFormConfig: FormProps = {
//         fields: [
//             {
//                 inputType: "text",
//                 name: 'first name',
//                 variant: "outlined",
//                 required: true,
//                 requiredMessage: 'Name is required',
//                 label: 'first name',
//             },
//             {
//                 inputType: "text",
//                 name: 'last name',
//                 variant: "outlined",
//                 required: true,
//                 requiredMessage: 'Last Name is required',
//                 label: 'last name',
//             },
//             {
//                 inputType: "number",
//                 name: 'age',
//                 variant: "outlined",
//                 required: true,
//                 requiredMessage: 'Age is required',
//                 label: 'age',
//             },
//             {
//                 inputType: "email",
//                 name: 'email',
//                 variant: "outlined",
//                 required: true,
//                 label: 'email',
//             },
//             {
//                 inputType: "radio",
//                 name: 'gender',
//                 variant: "outlined",
//                 required: true,
//                 label: 'gender',
//             },
//         ],
//         header: {
//             text: 'Edit User' + data?.id
//         },
//         actions: [
//             {
//                 name: 'cancel',
//                 action: () => {
//                     alert(1)
//                 },
//                 variant: "outlined"
//             },
//             {
//                 name: 'submit',
//                 action: () => {
//                     alert(2)
//                 },
//                 variant: "outlined"
//             }
//         ]
//     }
//     return (
//         <>
//             {isLoading ? <div>Loading</div> :
//                 <Form
//                     fields={editEntityFormConfig.fields}
//                     header={editEntityFormConfig.header}
//                     actions={editEntityFormConfig.actions}
//                     defaultValue={data}
//                 >
//                 </Form>
//             }
//         </>
//     )
// }

const defaultUser: GetUserResponse = {
    age: 0, email: "", firstName: "", gender: "", id: "", lastName: ""

}
export const EditEntityLayout = () => {
    const {userId} = useParams();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, error, isLoading} = useGetUserQuery(userId);
    const {formState, control, handleSubmit, reset, register}
        = useForm<User>({
        defaultValues: useMemo(() => {
            return data || defaultUser;
        }, [data])
    });
    useEffect(() => {
        reset(data);
    }, [data])
    const onSubmit = (data: User) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                    <TextField {...field} label="Name" required={true} variant="outlined"/>
                )}
            />
            <Controller
                name="lastName"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                    <TextField {...field} label="Last name" required={true} variant="outlined"/>
                )}
            />
            <Controller
                name="email"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                    <TextField {...field} label="Email" required={true} variant="outlined"/>
                )}
            />
            <Controller
                name="age"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                    <TextField {...field} label="Age" required={true} variant="outlined"/>
                )}
            />
            <Controller
                name="gender"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                    <TextField {...field} label="Gender" required={true} variant="outlined"/>
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    )
}