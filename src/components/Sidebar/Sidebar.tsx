import {NavLink, Link} from 'react-router';
import styles from './Sidebar.module.css';

import logo from '../../assets/logo.svg';

const Sidebar = () => {

    return (
        <aside className={styles.sidebar}>
            <Link to={'/'} className={styles.title}>
                <img src={logo} alt="logo"/>
                <h2>ArrowFlicks</h2>
            </Link>
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>
                    Movies
                </NavLink>
                <NavLink to="/rated" className={({isActive}) => isActive ? styles.active : ''}>
                    Rated movies
                </NavLink>
            </nav>

        </aside>
    );
};

export default Sidebar;