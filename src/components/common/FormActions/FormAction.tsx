import {ActionConfig} from "../Form";
import Button from "@mui/material/Button";

export const FormAction = (props: ActionConfig) => {
    const {name, action, variant} = props;

    return (
        <>
            <Button variant={variant} onClick={action}>
                {name}
            </Button>
        </>
    )
}