import { getHeadlines } from "../news";

export default function Newsweek({ news }) {
  const headlines = getHeadlines(news, 'newsweek')
  return (
    <>
      <div>
        {headlines.length ? (
          <ul>
            {headlines.map((headline, idx) => (
              <li key={idx}>
                <a href={headline.url} target="_blank" rel="noopener noreferrer">{headline.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <h4 className="loading">Loading...</h4>
        )}
      </div>
    </>
  )
}
