import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useHistory } from 'react-router-dom';
import Username from '../fields/username';
import Password from '../fields/password';
import Email from '../fields/email';
import FormValidation from '../utils/formValidator';
import ConfirmPassword from '../fields/confirmPassword';
import { Register } from '../../services/authService';

export interface iFormInput {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

export default function RegistrationForm() {
    const history = useHistory();
    const [formInput, setFormInput] = useState<iFormInput>({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState<iFormInput>({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });

    const handleFormInput = (e: any) => {
        const [returnForm, returnError] = FormValidation(e, formInput, error);
        setError((prevError) => ({
            ...prevError,
            username: returnError.username,
            password: returnError.password,
            email: returnError.email,
            firstName: returnError.firstName,
            lastName: returnError.lastName,
            confirmPassword: returnError.confirmPassword,
        }));
        setFormInput((prevFormInput) => ({
            ...prevFormInput,
            username: returnForm.username,
            password: returnForm.password,
            email: returnForm.email,
            firstName: returnForm.firstName,
            lastName: returnForm.lastName,
            confirmPassword: returnForm.confirmPassword,
        }));
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            email: formInput.email,
            username: formInput.username,
            password: formInput.password,
            password2: formInput.confirmPassword,
            first_name: formInput.firstName,
            last_name: formInput.lastName,
        };
        Register(formData)
            .then(() => history.push('/login'))
            .catch((responseError) => {
                const errorData = responseError.response.data;
                if (Object.prototype.hasOwnProperty.call(errorData, 'email')) {
                    setError((prevFieldError) => ({
                        ...prevFieldError,
                        email: 'Email is already taken',
                    }));
                }
                if (Object.prototype.hasOwnProperty.call(errorData, 'username')) {
                    setError((prevFieldError) => ({
                        ...prevFieldError,
                        username: 'Username is already taken',
                    }));
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => handleFormSubmit(e)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <Username
                            username={formInput.username}
                            handleFormInput={handleFormInput}
                            error={error.username}
                            border="rounded-md"
                        />
                        <Email email={formInput.email} handleFormInput={handleFormInput} error={error.email} />
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="sr-only">
                                    First Name
                                </label>
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="firstName"
                                    autoComplete="firstName"
                                    required
                                    value={formInput.firstName}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                    onChange={(e) => handleFormInput(e)}
                                />
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="sr-only">
                                    Last Name
                                </label>
                                <input
                                    id="last-name"
                                    name="lastName"
                                    type="lastName"
                                    autoComplete="lastName"
                                    required
                                    value={formInput.lastName}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                    onChange={(e) => handleFormInput(e)}
                                />
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
                            </div>
                        </div>
                        <Password
                            password={formInput.password}
                            handleFormInput={handleFormInput}
                            error={error.password}
                            border="rounded-md"
                        />
                        <ConfirmPassword
                            confirmPassword={formInput.confirmPassword}
                            handleFormInput={handleFormInput}
                            error={error.confirmPassword}
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                If already have an account then sign in!
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
