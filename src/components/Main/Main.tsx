import styles from './Main.module.css';
import Movies from './Movies/Movies';
import {Route, Routes} from 'react-router';

const Main = () => {
    return (
        <main className={styles.main}>
                <Routes>
                    <Route path={'/'} element={<Movies/>}/>
                </Routes>
        </main>
    );
};

export default Main;