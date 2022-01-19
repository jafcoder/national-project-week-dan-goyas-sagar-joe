import logo from "../../logo.svg";

export default function Homepage() {
  return (
    <div>
      <img className="App-logo" src={logo} alt="React-logo" />
      <p className="reactDefinition">
        React is a JavaScript framework that allows developers to create large
        web applications that can change data, without reloading the page.{" "}
        <br></br> The main purpose of React is to be fast, scalable, and simple.
      </p>
      <h3 className="react-link">
        <span>
          {" "}
          <a
            className="react-docs-text"
            rel="noreferrer"
            target="_blank"
            href="https://beta.reactjs.org/"
          >
            React Docs
          </a>
        </span>
      </h3>
      <p className="ReactDocInfo">
        The React Documentation is a really helpful and well written resource{" "}
        <br></br>so always make sure to refer to them when needed
      </p>
    </div>
  );
}
