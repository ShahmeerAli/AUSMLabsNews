import React, { useEffect, useState } from "react";
import { getNews } from "../../Api/external";
import styles from "./styles";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addBlog, deleteBlog, getAllBlogs } from "../../Api/internal";
import { images } from "../../Utils";

function Home() {
  const navigate = useNavigate();
  //Cheking if User is Authenticated
  const isAuth = useSelector((state) => state.user.auth);
  //Saving Data from External Api
  const [articles, setArticles] = useState([]);
  //Saving Data from Internal Api
  const [saved, setSaved] = useState([]);
  //Saving Current Blog
  const [blog, setBlog] = useState();
  const [isHover, setHover] = useState(false);
  const [added, setAdded] = useState(false);
  //Getting UserId from Store
  const _id = useSelector((state) => state.user._id);
  //Setting blog Id
  const [blogId, setBlogId] = useState();
  //Functions For Hover Effect
  const hoverOver = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };

  //Function to Control Add & Delete
  const addToFav = async () => {
    if (!isAuth) {
      //If user is not authenticated send back to login page
      navigate("/login");
    } else if (!added) {
      //If a blog is not already added
      //Add blog
      setAdded(!added);
      const data = {
        title: blog.title,
        url: blog.url,
        description: blog.description,
        author: blog.author,
        urlToImage: blog.urlToImage,
        user: _id,
        publishedAt: blog.publishedAt,
      };
      //try catch used already in Api
      const response = await addBlog(data);

      if (response.status === 201) {
        // redirect -> bookmarkPage
        // navigate("/bookmarks");
      } else if (response.code === "ERR_BAD_REQUEST") {
        //diplay error message
        console.log(response.response.data.message);
      }
    } else {
      //delete blog
      setAdded(!added);
      const res = await deleteBlog(blogId);
      // navigate("/bookmarks");
    }
  };

  //Fuction for card to see detail
  const handleClick = (url) => {
    navigate("/detail", { state: { url: url, remote: true } });
  };

  //Getting Data From External and Internal Apis
  useEffect(() => {
    //Immediately Invoked Fuction Expression IIFE
    // getting external Articles
    //If we come from BookMarks this will not be called
    (async function newsApiCall() {
      const response = await getNews();
      setArticles(response);
    })();
    // getting Saved Articles
    if (isAuth) {
      (async function apiCall() {
        console.log(_id);
        const response = await getAllBlogs(_id);
        setSaved(response);
      })();
    }
    //Resetting Articles
    setArticles([]);
  }, []);
  useEffect(() => {
    //Checking if the article is already saved
    const index = Math.floor(Math.random() * 19);
    setBlog(articles[index]);

    console.log(articles[index]);
    if (isAuth) {
      saved.map((x) => {
        if (x.url == blog.url) {
          setAdded(true);
          setBlogId(x.id);
        }
      });
    }
  }, [articles, saved]);
  const classes = styles();
  return (
    <>
      {blog ? (
        <div className={classes.banner}>
          <div className={classes.bannerImg}>
            <div
              onMouseOver={hoverOver}
              onMouseOut={hoverOut}
              className={classes.img}
              style={{
                backgroundImage: `url(${blog.urlToImage})`,
              }}
            >
              <div className={classes.fav}>
                {isHover ? (
                  <button className={classes.button} onClick={addToFav}>
                    {added ? (
                      <FaHeart style={{ color: "red", cursor: "pointer" }} />
                    ) : (
                      <FaRegHeart style={{ color: "red", cursor: "pointer" }} />
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
                <p className={classes.text}>{blog.title}</p>
                <h1 className={classes.head}>Description:</h1>
                <p className={classes.text}>{blog.description}</p>
                <h1 className={classes.head}>Author:</h1>
                <p className={classes.text}>{blog.author}</p>
                <h1 className={classes.head}>Published At:</h1>
                <p className={classes.text}>{blog.publishedAt}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
