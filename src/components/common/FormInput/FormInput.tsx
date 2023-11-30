import {Controller, FieldValues, RegisterOptions, useFormContext} from "react-hook-form";
import {TextField} from "@mui/material";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExtractedRulesType<TFieldValues> = Omit<RegisterOptions<FieldValues>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;

export type FormInputProps<TFieldValues extends FieldValues = FieldValues> = {
    name: string;
    label: string;
    required: boolean;
    rules: ExtractedRulesType<TFieldValues>;
}

export const FormInput = (props: FormInputProps) => {

    const {control} = useFormContext();
    return <Controller
        control={control}
        rules={props.rules}
        name={props.name}
        render={({field}) => (
            <TextField {...field} label={props.label} required={props.required} variant="outlined"/>
        )}
    />
}