import React, { useState, useEffect } from "react"
import { getNews } from "./news";
import Navbar from "./Navbar"
import Headlines from "./Headlines";

export default function App() {
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews()
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <Headlines news={news} />
    </>
  )
}
