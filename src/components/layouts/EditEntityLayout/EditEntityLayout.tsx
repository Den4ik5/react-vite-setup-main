import { useParams } from 'react-router-dom';
import { useGetUserQuery, useUpdateUserMutation } from '../../../api';
import { FormProvider, useForm } from 'react-hook-form';
import { User } from '../../../interfaces';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import { FormInput } from '../../common/FormInput';
import './EditEntityLayout.scss';

// 1. Add checkbox that if selected enable + 2 any fields
// 2. Merge add and edit
// 3. Testing: react-testing-library. Write a test for edit form where you mock GET /users/:id,
// change all form values and make sure PUT /users/:id is sent with updated values
// 4. Add some dummy login. Create a simple page for login, on backend create /login endpoint that
// returns 200 status if username 'guest' and password "1234", otherwise - 401
// 5. Once login is successful store user data in redux (???)

export const defaultUser: User = {
  age: 0,
  email: '',
  firstName: '',
  gender: '',
  id: '',
  lastName: '',
};
export const EditEntityLayout = () => {
  const { userId } = useParams();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { data, error, isLoading } = useGetUserQuery(userId);
  const [updateUser] = useUpdateUserMutation();
  const form = useForm<User>({
    defaultValues: useMemo(() => {
      return data || defaultUser;
    }, [data]),
  });
  useEffect(() => {
    form.reset(data);
  }, [data]);
  const onSubmit = (data: User) => {
    updateUser(data);
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form">
        <FormInput
          name="firstName"
          rules={{ required: true }}
          label="Name"
          required={true}
        ></FormInput>
        <FormInput
          name="lastName"
          rules={{ required: true }}
          label="Last name"
          required={true}
        ></FormInput>
        <FormInput
          name="email"
          rules={{ required: true }}
          label="Email"
          required={true}
        ></FormInput>
        <FormInput
          name="age"
          rules={{ required: true }}
          label="Age"
          required={true}
        ></FormInput>
        <FormInput
          name="gender"
          rules={{ required: true }}
          label="Gender"
          required={true}
        ></FormInput>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
