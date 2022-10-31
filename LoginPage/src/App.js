import React from 'react';
import './index.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
const App = () => {
    return (
        <div dir='rtl' className='flex justify-center items-center h-screen bg-gray-100'>
            <SignUp />
        </div>
    );
};

export default App;