import {FormProvider, useForm} from "react-hook-form";
import {FormInput} from "../../common/FormInput";
import Button from "@mui/material/Button";
import {useAddUserMutation} from "../../../api";
import {User} from "../../../interfaces";
import {defaultUser} from "../EditEntityLayout";

export const AddEntityLayout = () => {
    const [addUser] = useAddUserMutation()
    const form = useForm<User>(
        {
            defaultValues: defaultUser
        }
    );

    const onSubmit = (data: User) => {
        addUser(data);
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

