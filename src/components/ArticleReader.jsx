import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, deleteArticle } from '../DataService';

export default function ArticleReader() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticleById(id).then(setArticle);
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this?")) {
            await deleteArticle(article.id);
            navigate('/articles');
            window.location.reload();
        }
    };

    if (!article) return <p>Loading...</p>;

    return (
        <div>
            <h2>Article Details</h2>
            <p><strong>Name:</strong> {article.name}</p>
            <p><strong>Category:</strong> {article.category}</p>
            <p><strong>Price:</strong> ${article.price}</p>
            <p><strong>Description:</strong> {article.description}</p>

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => navigate(`/articles/edit/${article.id}`)}
                    className="btn-primary"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="btn-close"
                    style={{ marginLeft: '10px' }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}