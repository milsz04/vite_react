import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, saveArticle, getCategories } from '../DataService';

export default function ArticleEditor() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [article, setArticle] = useState({ name: '', category: '', price: 0, description: '' });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);

        if (id) {
            getArticleById(id).then(data => {
                if (data) setArticle(data);
            });
        }
    }, [id]);

    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        await saveArticle(article);
        navigate('/articles');
        window.location.reload();
    };

    return (
        <div>
            <h2>{id ? 'Edit Article' : 'Create New Article'}</h2>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>Name</label>
                <input name="name" value={article.name} onChange={handleChange} required />

                <label>Category</label>
                <select name="category" value={article.category} onChange={handleChange} required>
                    <option value="">Select a Category</option>
                    {categories.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                </select>

                <label>Price</label>
                <input type="number" name="price" value={article.price} onChange={handleChange} />

                <label>Description</label>
                <textarea name="description" value={article.description} onChange={handleChange} />

                <div style={{ marginTop: '20px' }}>
                    <button type="submit" className="btn-primary">Save</button>
                    <button type="button" onClick={() => navigate('/articles')} style={{ marginLeft: '10px' }}>Cancel</button>
                </div>
            </form>
        </div>
    );
}