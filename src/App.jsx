import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow/MovieRow.component";
import "./App.css";
import FeatureMovie from "./components/FeatureMovie/FeatureMovie.component";
import Header from "./components/Header/Header.component";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => (i.slug = "originals"));
      let randomChose = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let chose = originals[0].items.results[randomChose];

      let choseInfo = await Tmdb.getMovieInfo(chose.id, "tv");
      setFeatureData(choseInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  console.log(movieList);

  return (
    <div className="page">
      <Header blackHeader={blackHeader} />
      <main>
        {featureData && <FeatureMovie data={featureData} />}

        <section className="lists">
          {movieList.map(({ title, items }, key) => (
            <MovieRow key={key} title={title} items={items} />
          ))}
        </section>
      </main>
      <footer>
        {" "}
        <p>
          Feito com{" "}
          <span role="img" aria-label="coração">
            ❤️
          </span>{" "}
          e React por Guilherme Araújo
        </p>
        <p>Direitos de imagem para a Netflix</p>
        <p>Dados pegos do site Themoviedb.org</p>
      </footer>
    </div>
  );
}

export default App;
