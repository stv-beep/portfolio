import { Fragment } from "react";
import '../App.css';
import { technologies } from "./technologies";


export function Skills(){
    return (
        <Fragment>
            <div className="skills" id="skills">
                <h2>Skills</h2>
                <div className="skillsIcons">
                    {technologies.map((item, index) => {
                        return (
                            <img key={index} src={item.src}></img>
                        );
                    })}

                </div>
            </div>
        </Fragment>
    )

}