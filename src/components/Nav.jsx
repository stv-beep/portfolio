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
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.Title}
                            </a>
                        </li>
                );
                })}
            </ul>
            </nav>
            
        </Fragment>
    )
}