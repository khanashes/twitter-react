import React, { useEffect, useRef } from 'react';

interface props {
    username: string;
    handleFormInput: any;
    error: string;
}

const Username: React.FC<props> = ({ username, handleFormInput, error }) => {
    const usernameRef = useRef<HTMLInputElement>(null!);
    const usernameSpanRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        if (error.length > 0) {
            usernameRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
            usernameSpanRef.current.innerText = error;
        } else {
            usernameRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
            usernameSpanRef.current.innerText = '';
        }
    });
    return (
        <div>
            <label htmlFor="username-address" className="sr-only">
                Username address
            </label>
            <input
                id="username-address"
                ref={usernameRef}
                name="username"
                type="username"
                value={username}
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleFormInput}
            />
            <span
                ref={usernameSpanRef}
                className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
            />
        </div>
    );
};
export default Username;
