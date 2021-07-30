import React, { useEffect, useRef } from 'react';

interface props {
    email: string;
    handleFormInput: any;
    error: string;
}

const Email: React.FC<props> = ({ email, handleFormInput, error }) => {
    const emailRef = useRef<HTMLInputElement>(null!);
    const emailSpanRef = useRef<HTMLSpanElement>(null!);
    useEffect(() => {
        if (error.length > 0) {
            emailRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
            emailSpanRef.current.innerText = error;
        } else {
            emailRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
            emailSpanRef.current.innerText = '';
        }
    });
    return (
        <div>
            <label htmlFor="email-address" className="sr-only">
                Email address
            </label>
            <input
                id="email-address"
                ref={emailRef}
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleFormInput}
            />
            <span
                ref={emailSpanRef}
                className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
            />
        </div>
    );
};
export default Email;
