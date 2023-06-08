import React, { useEffect, useState } from "react";
import { getNews } from "../../Api/external";
import styles from "./styles";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { images } from "../../Utils/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.auth);
  const [articles, setArticles] = useState([]);
  const [isHover, setHover] = useState(false);
  const [added, setAdded] = useState(false);
  const [rand, setRand] = useState(0);
  const hoverOver = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };
  useEffect(() => {
    //Immediately Invoked Fuction Expression IIFE

    (async function newsApiCall() {
      const response = await getNews();
      setArticles(response);
    })();

    //Every time the banner changes randomly
    setRand(Math.floor(Math.random() * 19));

    //Resetting Articles
    setArticles([]);
  }, []);
  const addToFav = (url) => {
    navigate("/detail", { state: { url: url, remote: true } });
  };

  const handleClick = (url) => {
    navigate("/detail", { state: { url: url, remote: true } });
  };
  const classes = styles();
  return (
    <>
      <div className={classes.banner}>
        {articles.length > 0 ? (
          <>
            <div className={classes.bannerImg}>
              <div
                onMouseOver={hoverOver}
                onMouseOut={hoverOut}
                className={classes.img}
                style={{
                  backgroundImage: `url(${articles[rand].urlToImage})`,
                }}
              >
                <div className={classes.fav}>
                  {isHover ? (
                    <button
                      className={classes.button}
                      onClick={() => addToFav(articles[rand].url)}
                    >
                      {added ? (
                        <FaHeart style={{ color: "red", cursor: "pointer" }} />
                      ) : (
                        <FaRegHeart
                          style={{ color: "red", cursor: "pointer" }}
                        />
                      )}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={classes.bannerText}>
                <div className={classes.textWrapper}>
                  <h1 className={classes.head}>Title:</h1>
                  <p className={classes.text}>{articles[rand].title}</p>
                  <h1 className={classes.head}>Description:</h1>
                  <p className={classes.text}>{articles[rand].description}</p>
                  <h1 className={classes.head}>Author:</h1>
                  <p className={classes.text}>{articles[rand].author}</p>
                  <h1 className={classes.head}>Published At:</h1>
                  <p className={classes.text}>{articles[rand].publishedAt}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className={classes.cardContainer}>
        {articles.map((article) => (
          <div
            className={classes.card}
            key={article.url}
            onClick={() => handleClick(article.url)}
          >
            {article.urlToImage != "" ? (
              <img src={article.urlToImage} className={classes.cardImg} />
            ) : (
              <img src={images.logo} className={classes.cardImg} />
            )}
            <h3 className={classes.cardText}>{article.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
