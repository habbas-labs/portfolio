import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { InterviewMode } from './pages/InterviewMode';
import { Cimm2CaseStudyPage } from './pages/Cimm2CaseStudyPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<InterviewMode />} />
        <Route path="/cimm2" element={<Cimm2CaseStudyPage />} />
        <Route path="/case-study/cimm2" element={<Cimm2CaseStudyPage />} />
      </Route>
    </Routes>
  );
}
