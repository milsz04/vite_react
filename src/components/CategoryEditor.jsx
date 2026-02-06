import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryById, saveCategory, deleteCategory } from '../DataService';

export default function CategoryEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({ name: '' });

    useEffect(() => {
        if (id) {
            getCategoryById(id).then(data => { if(data) setCategory(data); });
        }
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        await saveCategory(category);
        navigate('/categories');
        window.location.reload();
    };

    const handleDelete = async () => {
        if (window.confirm("Delete this category?")) {
            await deleteCategory(category.id);
            navigate('/categories');
            window.location.reload();
        }
    };

    return (
        <div>
            <h2>{id ? 'Edit Category' : 'New Category'}</h2>
            <form onSubmit={handleSave}>
                <label>Name: </label>
                <input
                    value={category.name}
                    onChange={(e) => setCategory({...category, name: e.target.value})}
                />
                <br /><br />
                <button type="submit" className="btn-primary">Save</button>

                {id && (
                    <button type="button" onClick={handleDelete} className="btn-close" style={{marginLeft:'10px'}}>Delete</button>
                )}
            </form>
        </div>
    );
}