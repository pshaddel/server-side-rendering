const React = require('react');
const { Link, Route, Routes } = require('react-router-dom');
import Home from './Home';
import About from './About';

function App() {
    return (
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    );
}

export default App;