import { Routes, Route } from "react-router-dom";

import Blog from "./Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
