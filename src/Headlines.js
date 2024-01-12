import { Routes, Route } from "react-router-dom"
import Trending from "./pages/Trending"
import Ap from "./pages/Ap"
import Cnn from "./pages/Cnn"
import EpochTimes from "./pages/EpochTimes";
import Fox from "./pages/Fox"
/* import WashExam from "./pages/WashExam" */

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
        {/*
        <Route
          path="/washexam"
          element={<WashExam news={news} />}
        />
        */}
      </Routes>
    </div>
  )
}
