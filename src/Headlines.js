import { Routes, Route } from "react-router-dom"
import Trending from "./pages/Trending"
import Ap from "./pages/Ap"
import Bbc from "./pages/Bbc"
import Cnn from "./pages/Cnn"
import EpochTimes from "./pages/EpochTimes";
import Fox from "./pages/Fox"
import Newsweek from "./pages/Newsweek"
/* import WashExam from "./pages/WashExam" */
import Stats from "./pages/Stats"

export default function Headlines({ news }) {
  return (
    <div className="headlines">
      <Routes>
        <Route
          path="/"
          element={<Trending news={news} />}
        />
        <Route
          path="/trending"
          element={<Trending news={news} />}
        />
        <Route
          path="/ap"
          element={<Ap news={news} />}
        />
         <Route
          path="/bbc"
          element={<Bbc news={news} />}
        />
        <Route
          path="/cnn"
          element={<Cnn news={news} />}
        />
        <Route
          path="/epochtimes"
          element={<EpochTimes news={news} />}
        />
        <Route
          path="/fox"
          element={<Fox news={news} />}
        />
        <Route
          path="/newsweek"
          element={<Newsweek news={news} />}
        />
        {/*
        <Route
          path="/washexam"
          element={<WashExam news={news} />}
        />
        */}
        <Route
          path="/stats"
          element={<Stats news={news} />}
        />
      </Routes>
    </div>
  )
}
