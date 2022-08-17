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
            <nav className="NavbarItems">
            <a href="/">{a}</a>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                            <a className="nav-links hover:text-black" href={item.url}>
                              <li key={index}>
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