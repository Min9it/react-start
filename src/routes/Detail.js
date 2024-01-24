import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <div>
      <h1>
        <Link to="/">Detail</Link>
      </h1>
      <ul>
        {Object.entries(movie)
          .filter(([key, val]) => key !== "id" && !key.includes("image"))
          .map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
      </ul>
    </div>
  );
}

export default Detail;
