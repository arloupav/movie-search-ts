import Main from './components/Main/Main.tsx';
import Pagination from './components/Common/Pagination/Pagination.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';

import './app.css'

function App() {

    return (
        <div className={'appContainer'}>
            <Sidebar/>
            <Main/>
            <Pagination/>
        </div>
    );
}

export default App;
