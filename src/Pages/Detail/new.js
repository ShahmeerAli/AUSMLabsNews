import React, { useEffect, useState } from "react";
import { getNews } from "../../Api/external";
import styles from "./styles";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addBlog, getAllBlogs } from "../../Api/internal";

function Detail() {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.auth);
  const { state } = useLocation();
  const { url } = state;
  const [articles, setArticles] = useState([]);
  const [saved, setSaved] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isHover, setHover] = useState(false);
  const [added, setAdded] = useState(false);
  const [rand, setRand] = useState(0);

  const _id = useSelector((state) => state.user._id);
  const hoverOver = () => {
    setHover(true);
  };
  const addToFav = async () => {
    if (!isAuth) {
      navigate("/login");
    } else if (!added) {
      //Add blog
      setAdded(!added);
      const data = {
        title: filter[0].title,
        url: filter[0].url,
        description: filter[0].description,
        author: filter[0].author,
        urlToImage: filter[0].urlToImage,
        user: _id,
        publishedAt: filter[0].publishedAt,
      };
      //try catch used already in Api
      const response = await addBlog(data);

      if (response.status === 201) {
        //2. redirect -> homepage
        navigate("/bookmarks");
      } else if (response.code === "ERR_BAD_REQUEST") {
        //diplay error message
        console.log(response.response.data.message);
      }
    } else {
      //delete blog
    }
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
    // getting Saved articles
    (async function apiCall() {
      const response = await getAllBlogs(_id);
      setSaved(response);
    })();
    //Resetting Articles
    setArticles([]);
  }, []);
  useEffect(() => {
    //Checking if the article is already saved
    setFilter(articles.filter((x) => x.url == url));
    saved.map((x) => {
      if (x.url == url) {
        setAdded(true);
      }
    });
  }, [articles]);

  const classes = styles();
  return (
    <>
      <div className={classes.banner}>
        {filter.length > 0 ? (
          <>
            <div className={classes.bannerImg}>
              <div
                onMouseOver={hoverOver}
                onMouseOut={hoverOut}
                className={classes.img}
                style={{
                  backgroundImage: `url(${filter[rand].urlToImage})`,
                }}
              >
                <div className={classes.fav}>
                  {isHover ? (
                    <button className={classes.button} onClick={addToFav}>
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
                  <p className={classes.text}>{filter[rand].title}</p>
                  <h1 className={classes.head}>Description:</h1>
                  <p className={classes.text}>{filter[rand].description}</p>
                  <h1 className={classes.head}>Author:</h1>
                  <p className={classes.text}>{filter[rand].author}</p>
                  <h1 className={classes.head}>Published At:</h1>
                  <p className={classes.text}>{filter[rand].publishedAt}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Detail;
