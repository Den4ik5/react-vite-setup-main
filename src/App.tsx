import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { TablePage } from './pages/TablePage.tsx';
import { AddEntityPage } from './pages/AddEntityPage.tsx';
import { EditEntityPage } from './pages/EditEntityPage.tsx';
import { Layout } from './components/layouts/MainLayout/Layout.tsx';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TablePage />}></Route>
          <Route path="/add" element={<AddEntityPage />}></Route>
          <Route path="/edit" element={<EditEntityPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
