import {FormInput} from "../../common/FormInput";
import Button from "@mui/material/Button";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect, useMemo} from "react";
import {Container, Paper} from "@mui/material";
import './LoginLayout.scss';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../api";
import {Dispatch} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";
import {User} from "../../../interfaces";

const defaultLoginValues = {
    login: '',
    password: ''
}
export const LoginLayout = () => {

    const form = useForm({
        defaultValues: useMemo(() => {
            return defaultLoginValues;
        }, []),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {me} = useSelector((state: { auth: { me: User } }) => state.auth)

    useEffect(() => {
        if (me.id) {
            console.log(JSON.stringify(me));
            navigate('/')
        }
    }, [me, navigate])
    const handleOnSubmit = () => {
        dispatch(login({username: 'qwerty', password: '1234'}));
    }

    return (
        <Container className="login-container">
            <Paper className="login-paper">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                        <FormInput name="login" label="Login" required={true} rules={{required: true}}/>
                        <FormInput name="password" label="Password" required={true} rules={{required: true}}/>
                        <Button type="submit">Login</Button>
                    </form>
                </FormProvider>
            </Paper>
        </Container>
    )
}