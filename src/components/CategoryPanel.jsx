import { useEffect, useState } from 'react';
import { getCategories } from '../DataService';
import { Link, useNavigate } from 'react-router-dom';

export default function CategoryPanel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <h2 style={{margin: 0}}>Categories</h2>
                <button onClick={() => navigate('/categories/create')} className="btn-primary">
                    + New
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {categories.map(cat => (
                    <li key={cat.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                        <span>{cat.name}</span>
                        <Link to={`/categories/edit/${cat.id}`} style={{color: '#2563eb', textDecoration: 'none', fontWeight: 500}}>
                            Edit/View
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}