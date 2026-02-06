export default function About() {
    return (
        <div style={{ padding: '20px', lineHeight: '1.6', color: '#374151' }}>
            <h2 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '10px', marginBottom: '20px' }}>
                About the Author
            </h2>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/500px-George-W-Bush.jpeg" alt="George W. Bush" style={{width: '150px', borderRadius: '8px', float: 'right', marginLeft: '20px'}} />

            <h3 style={{ margin: '0 0 10px 0', color: '#111827' }}>George Walker Bush</h3>

            <p style={{ textAlign: 'justify' }}>
                George Walker Bush (born July 6, 1946) is an American politician, businessman, and
                former U.S. Air Force officer who served as the 43rd president of the United States
                from 2001 to 2009. A member of the Republican Party and the eldest son of the 41st
                president, George H. W. Bush, he served as the 46th governor of Texas from 1995 to 2000.
            </p>
        </div>
    );
}