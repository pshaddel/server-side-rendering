const React = require('react');
const { Link, Route, Routes } = require('react-router-dom');


function App() {
    return (
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </div>
    );
}