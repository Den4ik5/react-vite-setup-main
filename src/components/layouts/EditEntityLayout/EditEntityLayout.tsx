import {useParams} from "react-router-dom";
import {useGetUserQuery, useUpdateUserMutation} from "../../../api";
import {FormProvider, useForm} from "react-hook-form";
import {User} from "../../../interfaces";
import {useEffect, useMemo} from "react";
import Button from "@mui/material/Button";
import {FormInput} from "../../common/FormInput";

export const defaultUser: User = {
    age: 0, email: "", firstName: "", gender: "", id: "", lastName: ""
}
export const EditEntityLayout = () => {
    const {userId} = useParams();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, error, isLoading} = useGetUserQuery(userId);
    const [updateUser] = useUpdateUserMutation()
    const form = useForm<User>(
        {
            defaultValues: useMemo(() => {
                return data || defaultUser;
            }, [data])
        }
    );
    useEffect(() => {
        form.reset(data);
    }, [data])
    const onSubmit = (data: User) => {
        updateUser(data);
        console.log(data);
    }
    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormInput name='firstName' rules={{required: true}} label="Name" required={true}>
                </FormInput>
                <FormInput name="lastName" rules={{required: true}} label="Last name" required={true}>
                </FormInput>
                <FormInput name="email" rules={{required: true}} label="Email" required={true}>
                </FormInput>
                <FormInput name="age" rules={{required: true}} label="Age" required={true}>
                </FormInput>
                <FormInput name="gender" rules={{required: true}} label="Gender" required={true}>
                </FormInput>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </FormProvider>
    )
}