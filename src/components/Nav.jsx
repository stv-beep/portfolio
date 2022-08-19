import { Fragment } from "react";
import '../App.css';


const a = '<AA/>'

const MenuItems = [
    {
      Title: "<About me/>",
      url: "#about",
      cName: "nav-links"
    },
    {
      Title: "<Skills/>",
      url: "#skills",
      cName: "nav-links"
    },
    {
      Title: "<Projects/>",
      url: "#projects",
      cName: "nav-links"
    },
    {
      Title: "<Contact me/>",
      url: "#contact",
      cName: "nav-links"
    }
  ];


export function Nav(){
    return (
        <Fragment>
            <nav className="sticky top-0 z-10 text-center backdrop-blur-sm m-0 p-0 h-20">
            <a href="/" className="text-red-500">{a}</a>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                            <a className="text-white p-1 text-2xl hover:text-black" href={item.url}>
                              <li key={index} className="inline list-none p-3 leading-10 hover:bg-white hover:rounded-sm">
                              {item.Title}
                              </li>
                            </a>
                );
                })}
            </ul>
            </nav>
        </Fragment>
    )
}