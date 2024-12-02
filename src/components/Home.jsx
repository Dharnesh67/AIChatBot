import React from 'react';
import Robo from './robo';
import sidelogo from '../assets/sidelogo.svg'; // Make sure the path to your logo is correct
import Button from './Button';
import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/clerk-react';
import Button1 from '../utils/Button1';
const Home = () => {
    return (
        <div className='h-[92vh]'>
            <header className='fixed top-0 left-0 right-0 bg-slate-950 text-white p-4 flex justify-between items-center z-10'>
                <div>
                    <img src={sidelogo} alt="Logo" className="h-8 w-auto" />
                </div>
                <SignedIn>
                    <Button />
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className='bg-slate-700 px-10 py-3 rounded-full'>
                        <SignInButton />
                    </div>
                </SignedOut>

            </header>
            <Robo />
            <footer class="bg-gray-800 text-gray-200 py-4">
                <div class="container mx-auto px-4 text-center">
                    <p class="text-sm">Developed by Dharmesh Raikwar &copy; 2024 </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
