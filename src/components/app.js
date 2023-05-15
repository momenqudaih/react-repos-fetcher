import UserHeader from './UserHeader';
import '../index.css';

const App = () => {
    return (
        <div>
            <input
                type="text"
                className="userInput"
                placeholder="Enter Username"
            />
            <UserHeader />
        </div>
    );
};

export default App;
