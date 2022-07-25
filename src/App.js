import './App.css';
import Flex from './elements/Flex';
import { WordPage, BackPage } from './pages';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <Flex styles={{ height: '100vh' }}>
      <Routes>
        <Route path="/" element={<WordPage />} />
        <Route path='/back' element={<BackPage />} />
      </Routes>
    </Flex>
  );
}