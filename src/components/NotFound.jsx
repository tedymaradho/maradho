import { useNavigate } from "react-router-dom";

function NotFound() {
  const Navigate = useNavigate();

  const backToHomeHandler = () => Navigate("/");

  return (
    <div className="not-found">
      <h1 className="heading heading__primary heading--dark">Page Not Found</h1>
      <p className="subtitle">
        Sorry, this website is currently under development. 🙏
      </p>
      <a className="btn btn__inverse" onClick={backToHomeHandler}>
        Back to home
      </a>
    </div>
  );
}

export default NotFound;
