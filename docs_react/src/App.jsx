import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LabPage from './pages/LabPage';
import UtilitiesPage from './pages/UtilitiesPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab/:id" element={<LabPage />} />
        <Route path="/utilities" element={<UtilitiesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
