import '../App.css';


const a = '<AA/>'

const MenuItems = [
    {
      Title: "<About me/>",
      url: "/#about",
      cName: "nav-links"
    },
    {
      Title: "<Skills/>",
      url: "/#skills",
      cName: "nav-links"
    },
    {
      Title: "<Projects/>",
      url: "/#projects",
      cName: "nav-links"
    },
    {
      Title: "<Contact me/>",
      url: "/#contact",
      cName: "nav-links"
    }
  ];


export function Nav(){
    return (
            <nav className="sticky top-0 z-10 text-center backdrop-blur-sm h-20 p-3">
              <a href="/" className="text-red-500">{a}</a>
              <ul>
                  {MenuItems.map((item, index) => {
                      return (
                              <a className="text-white p-1 text-2xl hover:text-black" href={item.url} style={{padding:"0px"}} key={index}>
                                <li className="inline list-none px-2 py-1 hover:bg-white hover:rounded-sm">
                                {item.Title}
                                </li>
                              </a>
                      );
                  })}
              </ul>
            </nav>
    )
}