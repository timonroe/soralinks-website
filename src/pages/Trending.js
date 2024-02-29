import { getTrendingHeadlines } from "../news";

const NewsScraperSource = {
  AP: 'ap',
  BBC: 'bbc',
  CNN: 'cnn',
  EPOCH_TIMES: 'epochtimes',
  FOX: 'fox',
  NEWSWEEK: 'newsweek',
  // WASH_EXAM: 'washexam',
};

function getLogo(headline) {
  const { source } = headline;
  if (source === NewsScraperSource.AP) {
    return './news-source-logos/ap-logo-200x200.png';
  }
  if (source === NewsScraperSource.BBC) {
    return './news-source-logos/bbc-logo-200x200.png';
  }
  if (source === NewsScraperSource.CNN) {
    return './news-source-logos/cnn-logo-250x250.png';
  }
  if (source === NewsScraperSource.EPOCH_TIMES) {
    return './news-source-logos/epochtimes-logo-200x200.png';
  }
  if (source === NewsScraperSource.FOX) {
    return './news-source-logos/fox-logo-200x200.png';
  }
  if (source === NewsScraperSource.NEWSWEEK) {
    return './news-source-logos/newsweek-logo-200x200.png';
  }
  return './news 640 x 414.png';
}

export default function Trending({ news }) {
  const trendingHeadlines = getTrendingHeadlines(news)
  return (
    <>
      <div>
        {trendingHeadlines.length ? (
          <ul>
            {trendingHeadlines.map((headline, idx) => (
              <li key={idx}>
                <img src={getLogo(headline)} alt="News source's logo" />
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
