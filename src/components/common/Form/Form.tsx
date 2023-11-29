import {Fragment} from "react";
import Typography from "@mui/material/Typography";
import {InputLabel, TextField} from "@mui/material";
import {TextFieldVariants} from "@mui/material/TextField/TextField";
import {FormAction} from "../FormActions";
import {useForm} from "react-hook-form";

export type FormProps = {
    fields: FormField[];
    header?: HeaderConfig;
    actions?: ActionConfig[];
}

export type FormField = {
    inputType: 'text' | 'number' | 'email' | 'checkbox' | 'radio';
    name: string;
    variant?: TextFieldVariants;
    required?: boolean;
    requiredMessage?: string;
    label?: string;
    defaultValue?: string;
    // in case of checkbox / radio groups
    valueList?: string[];
    classes?: string;
}

export type HeaderConfig = {
    text: string;
    classes?: string;
}

export type ActionConfig = {
    name: string;
    action: any;
    variant?: "text" | "outlined" | "contained";
}

export const Form = (props: FormProps) => {
    const {fields, header, actions} = props;
    const form = useForm();
    const {register, formState} = form;
    const {errors} = formState;

    function handleChange() {
        console.log(errors);
        console.log(form.getValues());
    }

    return (
        <form>
            {
                header?.text && <Typography classes={header.classes}> {header.text} </Typography>
            }
            {fields.map((el: FormField) => {
                    if (el.inputType === 'checkbox' || el.inputType === 'radio') {
                        return <Fragment key={el.name}>
                        </Fragment>
                    }
                    return (
                        <Fragment key={el.name}>
                            {el.label && <InputLabel classes={el.classes}>{el.label}</InputLabel>}
                            <TextField
                                key={el.name}
                                type={el.inputType}
                                value={el.defaultValue}
                                variant={el.variant}
                                {...register(el.name, {
                                    required: {
                                        value: true,
                                        message: el.requiredMessage ? el.requiredMessage : 'Required'
                                    }
                                })}
                                onChange={handleChange}
                            ></TextField>
                            {/*<p>{errors.root?.message}</p>*/}
                        </Fragment>
                    )
                }
            )}
            {actions?.map(el =>
                <FormAction name={el.name} action={el.action} variant={el.variant} key={el.name}></FormAction>
            )}
        </form>
    )
}