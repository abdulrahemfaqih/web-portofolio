// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import { AnimatedSection } from './components/common/AnimatedSection';
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from './components/Articles';
import Contact from "./components/Contact";
import ArticleDetail from './components/ArticleDetail';
import NotFound from './components/NotFound';

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={
            <>
                <AnimatedSection>
                    <Hero  />
                </AnimatedSection>
                <About />
                <Experience />
                <Projects />
                <Articles />
                <Contact />
            </>
        } />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:flag" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);