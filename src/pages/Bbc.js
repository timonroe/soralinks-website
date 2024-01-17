import { getHeadlines } from "../news";

export default function Bbc({ news }) {
  const headlines = getHeadlines(news, 'bbc')
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
          <p>
            <h4 className="loading">Loading...</h4>
          </p>
        )}
      </div>
    </>
  )
}
