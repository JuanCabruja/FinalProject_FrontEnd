import { Redirect, Route } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

export default function LoginRedirect({ children, ...rest }) {

    const { isAuthenticated, loginUser } = useAuthContext();

    return (
        <Route {...rest} render={() => {
            return isAuthenticated
                ? <Redirect exact to={'/'+loginUser?.username} />
                : children
        }} />
    )
}
