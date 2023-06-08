import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../../Api/internal";
import { useSelector } from "react-redux";
import styles from "./styles";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  const navigate = useNavigate();
  const _id = useSelector((state) => state.user._id);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    //Immediately Invoked Fuction Expression IIFE
    (async function apiCall() {
      const response = await getAllBlogs(_id);
      setBlogs(response);
    })();
    //Resetting Blogs
    setBlogs([]);
  }, []);

  const handleClick = (url) => {
    navigate("/detail", { state: { url: url, remote: false } });
  };

  const classes = styles();
  return (
    <div className={classes.cardContainer}>
      {blogs.map((article) => (
        <div
          className={classes.card}
          key={article.id}
          onClick={() => handleClick(article.url)}
        >
          <img src={article.urlToImage} className={classes.cardImg} />

          <h3 className={classes.cardText}>{article.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Bookmarks;
