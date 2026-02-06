export default function BottomPanel({ article, onClose, onSwitch }) {
    if (!article) {
        return <div style={{ color: '#9ca3af', fontStyle: 'italic' }}>Select an item to view details here.</div>;
    }

    return (
        <div>
            <h3>{article.name}</h3>
            <p><b>Price:</b> <span style={{ color: '#10b981', fontWeight: 'bold' }}>${article.price}</span></p>
            <p style={{ color: '#4b5563' }}>{article.description}</p>

            <div style={{ marginTop: '20px' }}>
                <button className="btn-close" onClick={onClose}>Close</button>
                <button onClick={onSwitch}>Switch Panel</button>
            </div>
        </div>
    );
}