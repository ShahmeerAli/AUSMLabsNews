import React, { useEffect, useState } from "react";
import { getNews } from "../../Api/external";
import styles from "./styles";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addBlog, deleteBlog, getAllBlogs } from "../../Api/internal";

function Detail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //Cheking if User is Authenticated
  const isAuth = useSelector((state) => state.user.auth);
  // Getting Navigation params
  const { url, remote } = state;
  //Saving Data from External Api
  const [articles, setArticles] = useState([]);
  //Saving Data from Internal Api
  const [saved, setSaved] = useState([]);
  //Saving Current Blog
  const [blog, setBlog] = useState([]);
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
        title: blog[0].title,
        url: blog[0].url,
        description: blog[0].description,
        author: blog[0].author,
        urlToImage: blog[0].urlToImage,
        user: _id,
        publishedAt: blog[0].publishedAt,
      };
      //try catch used already in Api
      const response = await addBlog(data);

      if (response.status === 201) {
        // redirect -> bookmarkPage
        navigate("/bookmarks");
      } else if (response.code === "ERR_BAD_REQUEST") {
        //diplay error message
        console.log(response.response.data.message);
      }
    } else {
      //delete blog
      setAdded(!added);
      const res = await deleteBlog(blogId);
      navigate("/bookmarks");
    }
  };

  //Getting Data From External and Internal Apis
  useEffect(() => {
    //Immediately Invoked Fuction Expression IIFE
    // getting external Articles
    //If we come from BookMarks this will not be called
    if (remote) {
      (async function newsApiCall() {
        const response = await getNews();
        setArticles(response);
      })();
    }
    // getting Saved Articles
    (async function apiCall() {
      const response = await getAllBlogs(_id);
      setSaved(response);
    })();
    //Resetting Articles
    setArticles([]);
  }, []);
  useEffect(() => {
    //Checking if the article is already saved
    setBlog(articles.filter((x) => x.url == url));
    if (!remote) {
      setArticles(saved);
    }
    saved.map((x) => {
      if (x.url == url) {
        setAdded(true);
        setBlogId(x.id);
      }
    });
  }, [articles, saved]);

  const classes = styles();
  return (
    <>
      {blog[0] ? (
        <div className={classes.banner}>
          <div className={classes.bannerImg}>
            <div
              onMouseOver={hoverOver}
              onMouseOut={hoverOut}
              className={classes.img}
              style={{
                backgroundImage: `url(${blog[0].urlToImage})`,
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
                <p className={classes.text}>{blog[0].title}</p>
                <h1 className={classes.head}>Description:</h1>
                <p className={classes.text}>{blog[0].description}</p>
                <h1 className={classes.head}>Author:</h1>
                <p className={classes.text}>{blog[0].author}</p>
                <h1 className={classes.head}>Published At:</h1>
                <p className={classes.text}>{blog[0].publishedAt}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Detail;
