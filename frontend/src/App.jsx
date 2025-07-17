import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SearchBar from "./components/SearchBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";
import PreviousYear from "./pages/PreviousYear";
import Lectures from "./pages/Lectures";
import Login from "./pages/Login";
import Syllabus from "./pages/Syllabus";

function App() {
  return (
    <>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <Navbar />
      <SearchBar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/user/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/notes"
            element={
              <PageWrapper>
                <Notes />
              </PageWrapper>
            }
          />
          <Route
            path="/previousyear"
            element={
              <PageWrapper>
                <PreviousYear />
              </PageWrapper>
            }
          />
          <Route
            path="/lectures"
            element={
              <PageWrapper>
                <Lectures />
              </PageWrapper>
            }
          />
          <Route
            path="/syllabus"
            element={
              <PageWrapper>
                <Syllabus />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

// Reusable wrapper with consistent padding
const PageWrapper = ({ children }) => (
  <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-6">
    {children}
  </div>
);

export default App;
