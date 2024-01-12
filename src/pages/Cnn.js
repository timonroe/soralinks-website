import { getHeadlines } from "../news";

export default function Cnn({ news }) {
  const headlines = getHeadlines(news, 'cnn')
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
