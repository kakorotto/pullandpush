import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './Header';
import LongPolling from "./LongPolling";
import ShortPolling from "./ShortPolling";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Container>
          <Routes>
            <Route path="/long" element={<LongPolling />} />
            <Route path="/short" element={<ShortPolling />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
