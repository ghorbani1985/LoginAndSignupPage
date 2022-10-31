import React from 'react';
import SignUp from './Components/SignUp';
import './index.css';
import Login from './Components/Login';
const App = () => {
    return (
        <div dir='rtl' className='flex justify-center items-center p-4 min-h-screen bg-gray-100'>
            <SignUp />
        </div>
    );
};

export default App;