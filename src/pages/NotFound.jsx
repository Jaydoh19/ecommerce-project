import { Header } from "../components/Header";
import './NotFound.css';

export function NotFound(){
  return (
    <>
      <title>404 Page Not Found</title>

      <Header />
      <div className="not-found-message">
        <p>Page not found</p>
      </div>
    </>
  );
}