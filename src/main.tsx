import ReactDOM from 'react-dom/client'
import './core/index.css'
import MainPage from './views/main_page/view/main_page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WorkWithMeView from './views/work_with_me/view/work_with_me_view'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" index  element={<MainPage/>}/>
        <Route path="/work-with-me" index  element={<WorkWithMeView/>}/>
    </Routes>
    </BrowserRouter>
)
