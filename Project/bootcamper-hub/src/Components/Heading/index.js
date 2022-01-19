import "./index.css";
export default function Heading() {
  return (
    <div>
      <div className="page-top">
        <img
          className="soc-image"
          src="https://miro.medium.com/fit/c/262/262/1*xQPimNBj8T35-hmR8qW1sA.png"
          alt="School of Code"
        />
        <div className="heading-text">
          <h1 className="page-title">Bootcamper Hub</h1>
          <p className="tagline">
            A one stop shop for all your bootcamper resource needs
          </p>
        </div>
        <img
          className="soc-image"
          src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt="School of Code"
        />
      </div>
      <div className="search-container">
        <input
          className="heading-input"
          type="text"
          placeholder="Search for a React concept"
        />
        <button type="submit" class="search-button">
          <img
            className="button-image"
            src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"
            alt=""
          />
        </button>
      </div>

      <p className="intro">
        Search for a React concept you're struggling with and you will be
        provided with articles and videos from <br></br>coaches and former
        bootcampers to help with your understanding
      </p>
    </div>
  );
}
