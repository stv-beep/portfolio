import { technologies, stack, learning } from "./technologies";

export function Skills(){
    return (
            <section className="skills pt-36 pb-0" id="skills">
                <h2 className="text-center text-2xl section-title">Skills and technologies</h2>

                <div className="grid grid-flow-col mb-36 bg-slate-100 rounded-2xl shadow-xl">
                    <div>
                        {/* <h3 className="text-center text-xl text-gray-900 pt-2">Conocimientos</h3> */}
                        <div className="skillsIcons grid grid-cols-4 gap-4 section-stack py-10 sm:px-0 skillsGrid">
                            {technologies.map((item, index) => {
                                return (
                                    <img key={index} src={item.src} alt={item.name} className="p-2 bg-slate-200 shadow-md rounded-sm"></img>
                                );
                            })}

                        </div>
                    </div>
                    {/* <div>
                        <h3 className="text-center text-xl text-gray-900 pt-2">Aprendiendo...</h3>
                        <div className="skillsIcons grid grid-cols-4 gap-4 section-stack pb-10">
                            {learning.map((item, index) => {
                                return (
                                    <img key={index} src={item.src} alt={item.name} className="p-2 bg-slate-200 shadow-md"></img>
                                );
                            })}

                        </div>
                    </div> */}
                </div>
            </section>
    )

}