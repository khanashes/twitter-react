import React, { useEffect, useRef } from 'react';

type Props = {
    confirmPassword: string;
    handleFormInput: any;
    error: string;
};
const ConfirmPassword: React.FC<Props> = ({ confirmPassword, handleFormInput, error }) => {
    const confirmPasswordRef = useRef<HTMLInputElement>(null!);
    const confirmPasswordErrorRef = useRef<HTMLSpanElement>(null!);
    useEffect(() => {
        if (error.length > 0) {
            confirmPasswordRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
            confirmPasswordErrorRef.current.innerText = error;
        } else {
            confirmPasswordRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
            confirmPasswordErrorRef.current.innerText = '';
        }
    });
    return (
        <div>
            <label htmlFor="confirmPassword" className="sr-only">
                Password
            </label>
            <input
                id="confirmPassword"
                name="confirmPassword"
                ref={confirmPasswordRef}
                type="password"
                value={confirmPassword}
                autoComplete="current-confirmPassword"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                onChange={handleFormInput}
            />
            <span
                ref={confirmPasswordErrorRef}
                className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
            />
        </div>
    );
};
export default ConfirmPassword;
