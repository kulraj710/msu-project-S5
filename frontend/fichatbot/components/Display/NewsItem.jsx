import React from 'react';
import styles from "../../styles/Home/NewsItem.module.css"

const NewsItem = ({ news }) => {
    console.log(news)
  return (
    <>
    {news.map((news) => (
         <div className={styles.newsItem} key={news.uuid}>
         <img src={news?.thumbnail?.resolutions[0].url} alt={news.title} />
         <div className={styles.newsContent}>
           <h2><a href={news.link} target="_blank" rel="noopener noreferrer">{news.title}</a></h2>
           <p>Publisher: {news.publisher}</p>
           <p>Published Time: {new Date(news.providerPublishTime * 1000).toLocaleString()}</p>
         </div>
       </div>
    ))}
    </>
  );
};

export default NewsItem;
