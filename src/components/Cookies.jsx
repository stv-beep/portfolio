import { Nav } from "./Nav"
import { Footer } from "./Footer"

export function Cookies() {
    return (
        <>
            <Nav />
            <div className="pb-36">
                <h1 className="text-black text-3xl px-10 py-6">Español</h1>
                <div>
                    <h1 className="text-black text-2xl px-10 pb-6">Política de cookies</h1>

                    <div className="bg-white text-black text-sm px-10">
                        <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc. El objetivo de la cookie es adaptar el contenido de la web a su perfil y necesidades, sin cookies los servicios ofrecidos por cualquier página se verían mermados notablemente. Si desea consultar más información sobre qué son las cookies, qué almacenan, cómo eliminarlas, desactivarlas, etc., le rogamos se dirija a este enlace.</p>

                        <h3 className="text-lg">Cookies utilizadas en este sitio web</h3>
                        Este sitio web no trata con ningún tipo de cookie.
                    </div>
                </div>

                <h1 className="text-black text-3xl px-10 py-6">English</h1>
                <div>
                    <h1 className="text-black text-2xl px-10 pb-6">Cookies policy</h1>

                    <div className="bg-white text-black text-sm px-10">
                        <p>A cookie is a small text file that is stored in your browser when you visit almost any web page. Its usefulness is that the web is able to remember your visit when you return to browse that page. Cookies usually store information of a technical nature, personal preferences, content customization, usage statistics, links to social networks, access to user accounts, etc. The purpose of the cookie is to adapt the content of the web to your profile and needs, without cookies the services offered by any page would be significantly reduced. If you wish to consult more information about what cookies are, what they store, how to eliminate them, deactivate them, etc., please go to this link.</p>

                        <h3 className="text-lg">Cookies used on this website</h3>
                        This website does not deal with any type of cookie.
                    </div>
                </div>
            </div>
            <div className=" bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}