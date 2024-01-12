import { getTrendingHeadlines } from "../news";

export default function Trending({ news }) {
  const trendingHeadlines = getTrendingHeadlines(news)
  return (
    <>
      <div>
        {trendingHeadlines.length ? (
          <ul>
            {trendingHeadlines.map((headline, idx) => (
              <li key={idx}>
                <a href={headline.url} target="_blank" rel="noopener noreferrer">{headline.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <h4 className="loading">Loading...</h4>
          </p>
        )}
      </div>
    </>
  );
};
