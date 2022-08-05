import { Fragment } from "react";
import '../App.css';

export function Nav(){
    return (
        <Fragment>
            <div className="nav-bar">
                <a className="aboutLink" href="#intro">Sobre Mí</a>
            </div>
        </Fragment>
    )
}