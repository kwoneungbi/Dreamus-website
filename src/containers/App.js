import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import Header from "../components/common/Header";
import MainSection from "../components/views/MainSection";
import ResilienceAssessment from "../components/views/ResilienceAssessment";
import CompanyInfo from "../components/views/CompanyInfo";
import ProgramInfo from "../components/views/ProgramInfo";
import CEOMessage from "../components/views/CEOMessage";
import BI from "../components/views/BI";
import Careers from "../components/views/Careers";
import Enrollment from "../components/views/Enrollment";
import DingDongResilience from "../components/views/DingDongResilience";
import ResilienceTypes from "../components/views/ResilienceTypes";
import Footer from "../components/common/Footer";
import FormComponent from "../components/forms/FormComponent";
import BoardComponent from "../components/views/BoardComponent";
import PostDetail from "../components/views/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  useEffect(() => {
    syncLocalStorage(posts);
  }, [posts]);

  const syncLocalStorage = (posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const addPost = (post) => {
    setPosts((prevPosts) => {
      const updatedPosts = [post, ...prevPosts];
      syncLocalStorage(updatedPosts);
      return updatedPosts;
    });
  };

  const deletePost = (index) => {
    const numericIndex = parseInt(index, 10); // 문자열을 숫자로 변환
    setPosts((prevPosts) => {
      console.log("prevPosts before filter:", prevPosts);
      console.log("index to delete:", numericIndex);

      const updatedPosts = prevPosts.filter((_, i) => i !== numericIndex);

      console.log("updatedPosts after filter:", updatedPosts);

      syncLocalStorage(updatedPosts);

      return updatedPosts;
    });
  };

  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Router>
        <Header />
        <Container maxW='container.xl' flex='1'>
          <Routes>
            <Route path='/' element={<MainSection />} />
            <Route path='/company' element={<CompanyInfo />} />
            <Route path='/programs' element={<ProgramInfo />} />
            <Route
              path='/assessment'
              element={<ResilienceAssessment addPost={addPost} />}
            />
            <Route path='/ceo-message' element={<CEOMessage />} />
            <Route path='/bi' element={<BI />} />
            <Route path='/careers' element={<Careers />} />
            {/* <Route path='/testimonials' element={<Testimonials />} /> */}
            <Route path='/enrollment' element={<Enrollment />} />
            <Route path='/ding-dong' element={<DingDongResilience />} />
            <Route path='/resilience-types' element={<ResilienceTypes />} />
            <Route path='/form' element={<FormComponent addPost={addPost} />} />
            <Route path='/board' element={<BoardComponent posts={posts} />} />
            <Route
              path='/post/:index'
              element={<PostDetail posts={posts} deletePost={deletePost} />}
            />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
