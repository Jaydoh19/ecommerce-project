import { Header } from "../components/Header";
import './NotFound.css';

export function NotFound(){
  return (
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      
      <Header />

      <div className="not-found-message">
        <p>Page not found</p>
      </div>
    </>
  );
}