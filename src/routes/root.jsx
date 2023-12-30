import {
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import {
  getNews,
} from "../news";


export async function action() {
}

export async function loader({ request }) {
  const news = await getNews();
  // const { topHeadlines } = news;
  // console.log(`news: ${JSON.stringify(topHeadlines, null, 2)}`);
  return { news: news };
}

export default function Root() {
  const { news } = useLoaderData();
  const { topHeadlines } = news;
  // console.log(`news: ${JSON.stringify(topHeadlines, null, 2)}`);
  const navigation = useNavigation();
  const submit = useSubmit();

  return (
    <>
      <div id="sidebar">
        <h1>
          Trending News...
        </h1>
        <nav>
          {topHeadlines.length ? (
            <ul>
              {topHeadlines.map((headline, idx) => (
                <li key={idx}>
                  <a href={headline.url} target="_blank" rel="noopener noreferrer">{headline.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No headlines</i>
            </p>
          )}
        </nav>
      </div>
    </>
  );
}
