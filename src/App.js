import { Routes, Route } from "react-router-dom";

import Blog from "./routes/Blog";
import Estadisticas from "./routes/Blog2";
import Error from "./routes/Error";

function Apps() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Error />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
    </>
  );
}

export default Apps;
