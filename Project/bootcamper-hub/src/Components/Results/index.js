import Article from "../Article";
import Video from "../Video";

export default function Results() {
  return (
    <div className="results">
      <div className="coachRecommended">
        <section className="articleSection">
          <Article />
          <Article />
        </section>

        <section className="videoSection">
          <Video />
        </section>
      </div>

      <div className="bootcamperRecommended">
        <section className="articleSection">
          <Article />
          <Article />
        </section>

        <section className="videoSection">
          <Video />
        </section>
      </div>
    </div>
  );
}
