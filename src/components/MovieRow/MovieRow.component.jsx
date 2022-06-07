import Slider from "react-slick/lib/slider";
import "./MovieRow.style.scss";

function RightArrow({ className, style, onClick }) {
  return <span></span>;
}

function LeftArrow({ className, style, onClick }) {
  return <span></span>;
}

export default function MovieRow({ title, items }) {
  const settings = {
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true,

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <Slider {...settings}>
        {items.results.length > 0 &&
          items.results.map(({ poster_path, original_title }, key) => (
            <div key={key} className="item">
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
              />
            </div>
          ))}
      </Slider>
    </>
  );
}
