import {useParams} from 'react-router-dom';
import {useAddUserMutation, useGetUserQuery, useUpdateUserMutation} from '../../../api';
import {FormProvider, useForm} from 'react-hook-form';
import {User} from '../../../interfaces';
import {useEffect, useMemo, useState} from 'react';
import Button from '@mui/material/Button';
import {FormInput} from '../../common/FormInput';
import './EditEntityLayout.scss';
import {Checkbox, FormControlLabel} from "@mui/material";

// 1. Add checkbox that if selected enable + 2 any fields
// 2. Merge add and edit
// 3. Testing: react-testing-library. Write a test for edit form where you mock GET /users/:id,
// change all form values and make sure PUT /users/:id is sent with updated values
// 4. Add some dummy login. Create a simple page for login, on backend create /login endpoint that
// returns 200 status if username 'guest' and password "1234", otherwise - 401
// 5. Once login is successful store user data in redux (???)

const defaultUser: User = {
    age: 0,
    email: '',
    firstName: '',
    gender: '',
    id: '',
    lastName: '',
};
export const EditEntityLayout = () => {
    const {userId} = useParams();
    const isEditable: boolean = !!userId;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data} = useGetUserQuery(userId);
    const [updateUser] = useUpdateUserMutation();
    const [addUser] = useAddUserMutation();
    const form = useForm<User>({
        defaultValues: useMemo(() => {
            if (isEditable) {
                return data || defaultUser;
            }
            return defaultUser;
        }, [data, isEditable]),
    });
    useEffect(() => {
        form.reset(data);
    }, [data, form]);
    const onSubmit = (data: User) => {
        if (isEditable) {
            updateUser(data);
        } else {
            addUser(data)
        }
    };

    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleCheckboxChange(e) {
        console.log(e.target.checked);
        setShowAdditionalFields(e.target.checked);
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="form">
                <FormInput name="firstName" rules={{required: true}} label="Name" required={true}/>
                <FormInput name="lastName" rules={{required: true}} label="Last name" required={true}/>
                <FormInput name="email" rules={{required: true}} label="Email" required={true}/>
                {/*<FormGroup>*/}
                <FormControlLabel control={<Checkbox/>} label="Show additional info"
                                  onChange={handleCheckboxChange}/>
                {/*</FormGroup>*/}
                {
                    showAdditionalFields && <>
                    <FormInput name="age" rules={{required: true}} label="Age" required={true}/>
                    <FormInput name="gender" rules={{required: true}} label="Gender" required={true}/>
                  </>
                }

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
};
