import React from 'react';
import SignUp from './Components/SignUp';
import './index.css';
import Login from './Components/Login';
const App = () => {
    return (
      <>
        <div
          dir="rtl"
          className="flex justify-center items-center p-4 min-h-screen bg-[#A7D7C5] relative overflow-hidden"
        >
          <div className="w-[600px] h-[600px] flex absolute top-[-269px] left-[-285px] shadow opacity-40 lg:top-[-239px] lg:left-[-97px] origin-center rotate-45 rounded-full bg-[#C1E3D6]"></div>
          <div className="w-[600px] h-[500px] flex absolute bottom-[-269px] right-[-285px] shadow opacity-40 lg:bottom-[-239px] lg:right-[-97px] origin-center rotate-45 rounded-[160px] bg-[#C1E3D6]"></div>
          <SignUp />
        </div>
      </>
    );
};

export default App;