import React from 'react';
import { UserList, User } from './tweetSection';

interface SidebarProps {
    userList: UserList;
    button: string;
    method: Function;
}
const Sidebar: React.FC<SidebarProps> = ({ userList, button, method }) => {
    return (
        <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
            <div className="relative">
                <ul className="relative z-0 divide-y divide-gray-200">
                    {userList.map((item: User) => (
                        <li key={item.id}>
                            <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                <div className="flex-1 min-w-0">
                                    <div className="focus:outline-none">
                                        {/* Extend touch target to entire panel */}
                                        <span className="absolute" />
                                        <div className="grid grid-cols-3">
                                            <p className="grid-cols-2 text-sm font-medium p-2 text-gray-900">
                                                {item.username}
                                            </p>
                                            <button
                                                onClick={() => method(item.id)}
                                                type="button"
                                                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                {button}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
