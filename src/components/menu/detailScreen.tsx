import React from 'react';

const directory: any = [
    {
        id: 1,
        name: 'Leslie Abbott',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Hector Adams',
        role: 'VP, Marketing',
        imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Blake Alexander',
        role: 'Account Coordinator',
        imageUrl:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Fabricio Andrews',
        role: 'Senior Art Director',
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

export default function DetailScreen() {
    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div className="flex-1 relative z-0 flex overflow-hidden">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" />
                    <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                        <div className="px-6 pt-6 pb-4">
                            <h2 className="text-lg font-medium text-gray-900">Users</h2>
                            <p className="mt-1 text-sm text-gray-600">Search directory of 3,018 employees</p>
                        </div>
                        {/* Directory list */}
                    </aside>
                </div>
            </div>
        </div>
    );
}
