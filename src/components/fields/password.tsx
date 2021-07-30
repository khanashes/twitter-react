import React, { useEffect, useRef } from 'react';

interface props {
    password: string;
    handleFormInput: any;
    error: string;
    border: string;
}

const Password: React.FC<props> = ({ password, handleFormInput, error, border }) => {
    const passwordRef = useRef<HTMLInputElement>(null!);
    const passwordSpanRef = useRef<HTMLSpanElement>(null!);
    useEffect(() => {
        if (error.length > 0) {
            passwordRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
            passwordSpanRef.current.innerText = error;
        } else {
            passwordRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
            passwordSpanRef.current.innerText = '';
        }
    });
    return (
        <div>
            <label htmlFor="password" className="sr-only">
                Password
            </label>
            <input
                id="password"
                name="password"
                ref={passwordRef}
                type="password"
                value={password}
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${border} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                onChange={handleFormInput}
            />
            <span
                ref={passwordSpanRef}
                className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
            />
        </div>
    );
};

export default Password;
