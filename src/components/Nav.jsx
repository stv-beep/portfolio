import '../App.css';

const MenuItems = [
  {
    title: "About me",
    url: "/#about"
  },
  {
    title: "Projects",
    url: "/#projects"
  },
  {
    title: "Experience",
    url: "/#experience"
  },
  {
    title: "Skills",
    url: "/#skills"
  },
  {
    title: "Contact me",
    url: "/#contact"
  }
];


export function Nav() {
  return (
    <nav className="nav sticky top-0 z-10 backdrop-blur-sm">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <a href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 ml-4 hover:text-white navSectionsTitle">AA</a>          
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span className='displayMenu'>
            <div></div>
            <div></div>
            <div></div>
          </span>
        </label>
      </div>

      <div className="nav-links pr-4" id="navItems">

        {MenuItems.map((item, index) => {
          return (
            <a href={item.url} key={index} className="bg-clip-text text-transparent  bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-600 hover:text-white navSections">
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  )
}
