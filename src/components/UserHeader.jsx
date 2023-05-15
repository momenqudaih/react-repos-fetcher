import { useState, useEffect } from 'react';
import { getUserData } from '../utils/getUserData';
import Header from './Header';

const UserHeader = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        document.querySelector('.userInput').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                setUsername(e.target.value);
            }
        });
        getUserData(username).then((data) => {
            setUserData(data);
        });

        return () => {
            document
                .querySelector('.userInput')
                .removeEventListener('keyup', (e) => {
                    if (e.key === 'Enter') {
                        setUsername(e.target.value);
                    }
                });
        };
    }, [username]);

    // optional chaining
    // if (userData?.message === 'Not Found') return <div>User not found</div>;
    if (!userData) return <div>Loading...</div>;

    return <Header userData={userData} />;
};

export default UserHeader;
