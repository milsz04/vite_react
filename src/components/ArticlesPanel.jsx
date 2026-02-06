import { useEffect, useState } from 'react';
import { getArticles } from '../DataService';
import { Link, useNavigate } from 'react-router-dom';

export default function ArticlesPanel() {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getArticles().then(data => setArticles(data));
    }, []);

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Articles</h2>
                <button onClick={() => navigate('/articles/create')} className="btn-primary">+ New</button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {articles.map(art => (
                    <li key={art.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{art.name}</span>
                            <Link to={`/articles/view/${art.id}`} style={{color: '#2563eb'}}>View</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}