import { Link } from 'react-router-dom';

export default function MenuBar() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>

                <h1 style={{ color: 'white', fontSize: '1.2rem', margin: 0, marginRight: '20px' }}>
                    React+Vite 2/2
                </h1>

                <Link to="/articles" className="nav-link">Articles</Link>
                <Link to="/categories" className="nav-link">Categories</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>

            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="app-logo" alt="logo" style={{height: '40px'}}/>
        </div>
    );
}