// src/components/DetailsPanel.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, saveArticle, deleteArticle, getCategories } from '../DataService';

export default function DetailsPanel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState({ name: '', category: '', price: 0, description: '' });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(data => setCategories(data));

        if (id && id !== 'create') {
            getArticleById(Number(id)).then(data => {
                if(data) setArticle(data);
            });
        } else {
            setArticle({ name: '', category: categories[0] || '', price: 0, description: '' });
        }
    }, [id]);

    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        await saveArticle(article);
        alert('Saved!');
        window.location.reload();
    };

    const handleDelete = async () => {
        await deleteArticle(article.id);
        alert('Deleted!');
        navigate('/articles');
        window.location.reload();
    };

    return (
        <div>
            <h2>{id === 'create' ? 'New Article' : 'Edit Article'}</h2>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                <label>Name:</label>
                <input name="name" value={article.name} onChange={handleChange} />

                <label>Category:</label>
                <select name="category" value={article.category} onChange={handleChange}>
                    <option value="">Select...</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <label>Price:</label>
                <input type="number" name="price" value={article.price} onChange={handleChange} />

                <label>Description:</label>
                <textarea name="description" value={article.description} onChange={handleChange} />

                <div style={{ marginTop: '20px' }}>
                    <button onClick={handleSave} className="btn-primary">Save</button>
                    {id !== 'create' && (
                        <button onClick={handleDelete} className="btn-close" style={{marginLeft: '10px'}}>Delete</button>
                    )}
                </div>
            </form>
        </div>
    );
}