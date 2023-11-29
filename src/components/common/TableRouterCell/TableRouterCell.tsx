import {Link} from "react-router-dom";

export const TableRouterCell = (props: { url: string }) => {
    // const navigate = useNavigate();

    // const onclick = () => {
    //     navigate(props.url)
    // }

    // return <div style={{width: '100px', height: '50px'}} onClick={onclick}></div>
    return <Link to={props.url}> Go to </Link>
}