import React, { useEffect, useRef } from 'react';

interface props {
    username: string;
    handleFormInput: any;
    error: string;
    border: string;
}

const Username: React.FC<props> = ({ username, handleFormInput, error, border }) => {
    const usernameRef = useRef<HTMLInputElement>(null!);
    const usernameParaRef = useRef<HTMLParagraphElement>(null!);
    useEffect(() => {
        if (error.length > 0) {
            usernameRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
            usernameParaRef.current.innerText = error;
        } else {
            usernameRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
            usernameParaRef.current.innerText = '';
        }
    });
    return (
        <div>
            <label htmlFor="username-address" className="sr-only">
                Username address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    id="username-address"
                    ref={usernameRef}
                    name="username"
                    type="username"
                    value={username}
                    autoComplete="username"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${border} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Username"
                    onChange={handleFormInput}
                />
                <p ref={usernameParaRef} className="mt-2 text-sm text-red-600" id="username-error">
                    Your password must be less than 4 characters.
                </p>
            </div>
        </div>
    );
};
export default Username;
