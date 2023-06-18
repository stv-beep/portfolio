import { technologies } from "./technologies";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
    return (
        <section className="skills pt-20 pb-0" id="skills">
            <SectionTitle title="Skills and technologies"/>

            <div className="grid grid-flow-col mb-10 bg-white-rgba rounded-2xl shadow-xl">
                <div>
                    <div className="skillsIcons gap-4 section-stack sm:w-[90%] lg:w-[45%] py-10 s:px-6">
                        {technologies.map((item, index) => {
                            return (
                                <div key={index} data-title={item.name}>
                                    <img src={item.src} alt={item.name} className="w-[55px] h-[55px] p-1 m-1 bg-slate-200 shadow-md rounded-md"></img>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
