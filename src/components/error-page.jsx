import { useRouteError } from "react-router-dom";
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Nav />
      <div id="error-page" className="px-10 py-6">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.data || error.statusText || error.message}</i>
        </p>
        <p>
          Just go to <a href="/" className="text-red-800 hover:text-red-300">Home</a>
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}