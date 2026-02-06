export default function FooterBar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%',color: 'white' }}>
            <p style={{ margin: 0 }}>&copy; Miłosz Szynka 2026</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="logo"
                style={{ height: '30px', width: 'auto', display: 'block' }}
            />
        </div>
    );
}