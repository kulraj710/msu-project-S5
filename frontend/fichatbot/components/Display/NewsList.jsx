import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ newsList }) => {
    
  return (
    <div className="news-list">
      {newsList.map((news, index) => (
        <>
        <NewsItem key={index} news={news} />
        </>
      ))}
    </div>
  );
};

export default NewsList;
