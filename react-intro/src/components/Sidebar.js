import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/london">London</Link></li>
                <li><Link to="/paris">Paris</Link></li>
                <li><Link to="/tokyo">Tokyo</Link></li>
                <li><Link to="/info">Info</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
