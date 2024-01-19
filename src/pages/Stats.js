import { getTopTokens } from "../news";

export default function Stats({ news }) {
  const topTokens = getTopTokens(news)
  return (
    <>
      <div>
        {topTokens.length ? (
          <ul>
            {topTokens.map((topToken, idx) => (
              <li key={idx}>
                <p>
                  {`Token: ${topToken.token}`}<br />{`Count: ${topToken.count}`}
                </p>
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
