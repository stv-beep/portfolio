import { Fragment } from "react";
import '../App.css';
import { technologies } from "./technologies";

export function Skills(){
    return (
        <Fragment>
            <section className="skills" id="skills">
                <h2 className="text-center text-2xl">Conocimientos y tecnologías</h2>
                    <div className="skillsIcons grid grid-cols-4 gap-4">
                        {technologies.map((item, index) => {
                            return (
                                <img key={index} src={item.src} alt={item.name}></img>
                            );
                        })}

                    </div>
            </section>
        </Fragment>
    )

}
