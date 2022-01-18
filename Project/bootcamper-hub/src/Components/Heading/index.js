export default function Heading() {
  return (
    <div>
      <h1>Boomtcamper Hub</h1>
      <p>a one stop shop for all your bootcamper resource needs</p>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="School of Code"
      />
      <input type="text" placeholder="Search for a school of code concept" />
      <button>Search</button>
      <p className="intro">
        Search for a React concept you're sturggling with and you will be
        provided with articles and videos from coaches and former bootcampers to
        help with your understanding
      </p>
    </div>
  );
}
