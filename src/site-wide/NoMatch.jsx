import { Link } from "react-router-dom";
import CS571Configurator from "../config/configurator";

function NoMatch() {

    return (
        <div>
            <h2>That's a 404.</h2>
            <p>Uh oh, looks like you've taken a wrong turn!</p>
            <p>
                <Link to={CS571Configurator.BASE + "/"}>Back to safety.</Link>
            </p>
        </div>
    );
}

export default NoMatch;