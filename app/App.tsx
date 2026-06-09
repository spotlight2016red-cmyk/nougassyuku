import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LPPattern1 } from './components/LPPattern1';
import { BrainCheckClient, CAMP_BRAIN_CHECK_PATH } from '../features/camp-brain-check';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LPPattern1 />} />
        <Route path={CAMP_BRAIN_CHECK_PATH} element={<BrainCheckClient />} />
        <Route path="/brain-check" element={<Navigate to={CAMP_BRAIN_CHECK_PATH} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
