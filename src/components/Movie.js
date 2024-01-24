import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, cover, title, summary, year, genres }) {
  return (
    <div>
      <img src={cover} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{`${title}(${year})`}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
