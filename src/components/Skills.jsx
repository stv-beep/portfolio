import '../App.css';
import { technologies, stack, learning } from "./technologies";

export function Skills(){
    return (
            <section className="skills" id="skills">
                <h2 className="text-center text-2xl section-title">Conocimientos y tecnologías</h2>

                <div className="grid grid-flow-col mb-36 bg-gray-900 rounded-2xl shadow-xl">
                    <div>
                        <h3 className="text-center text-xl text-slate-50 pt-2">Conocimientos</h3>
                        <div className="skillsIcons grid grid-cols-4 gap-4 section-stack pb-10">
                            {stack.map((item, index) => {
                                return (
                                    <img key={index} src={item.src} alt={item.name}></img>
                                );
                            })}

                        </div>
                    </div>
                    <div>
                        <h3 className="text-center text-xl text-slate-50 pt-2">Aprendiendo...</h3>
                        <div className="skillsIcons grid grid-cols-4 gap-4 section-stack pb-10">
                            {learning.map((item, index) => {
                                return (
                                    <img key={index} src={item.src} alt={item.name}></img>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>
    )

}
