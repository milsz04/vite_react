import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import FooterBar from './components/FooterBar';
import ArticlesPanel from './components/ArticlesPanel';
import CategoryPanel from './components/CategoryPanel';
import ArticleReader from './components/ArticleReader';
import ArticleEditor from './components/ArticleEditor';
import CategoryEditor from './components/CategoryEditor';
import About from './components/About';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-grid">
                <div className="menu-area"><MenuBar /></div>

                <div className="main-panel-area">
                    <Routes>
                        <Route path="/" element={<Navigate to="/articles" />} />
                        <Route path="/articles/*" element={<ArticlesPanel />} />
                        <Route path="/categories/*" element={<CategoryPanel />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>

                <div className="details-panel-area">
                    <Routes>
                        <Route path="/articles" element={<p>Select an article</p>} />
                        <Route path="/articles/view/:id" element={<ArticleReader />} />
                        <Route path="/articles/create" element={<ArticleEditor />} />
                        <Route path="/articles/edit/:id" element={<ArticleEditor />} />
                        <Route path="/about" element={<div style={{padding:'20px', color: '#888'}}></div>} />
                        <Route path="/categories" element={<p>Select a category</p>} />
                        <Route path="/categories/create" element={<CategoryEditor />} />
                        <Route path="/categories/edit/:id" element={<CategoryEditor />} />
                    </Routes>
                </div>

                <div className="footer-area"><FooterBar /></div>
            </div>
        </BrowserRouter>
    );
}

export default App;