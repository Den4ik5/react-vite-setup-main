import './App.scss';
import {Route, Routes} from 'react-router-dom';

import {Layout} from './components/layouts/MainLayout';
import {TableLayout} from "./components/layouts/TableLayout/TableLayout.tsx";
import {EditEntityLayout} from "./components/layouts/EditEntityLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<TableLayout/>}></Route>
                    <Route path="/add" element={<EditEntityLayout/>}></Route>
                    <Route path="/edit/:userId" element={<EditEntityLayout/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
