import React, { useEffect, useState } from 'react';
import { GetUsers, GetFollowers, CreateFollower, DeleteFollower, GetTweets } from '../../services/authService';
import Sidebar from './sidebar';

export type tweets = {
    id: number;
    user: number;
    text: string;
    image: string;
    // eslint-disable-next-line camelcase
    created_at: string;
    author: string;
};
export type User = {
    id: number;
    username: string;
};

export type UserList = User[];
const TweetSection = () => {
    const [userList, setUserList] = useState<UserList>([]);
    const [followerList, setFollowerList] = useState<UserList>([]);
    const [tweetList, setTweetList] = useState<tweets[]>([]);
    useEffect(() => {
        GetTweets()
            ?.then((response) => setTweetList(response.data))
            .catch((error) => console.log(error.response.data));
    }, [userList, followerList]);
    useEffect(() => {
        GetUsers()
            ?.then((response) => {
                setUserList(response.data);
            })
            .catch((error) => console.log(error.response.data));
    }, [followerList]);
    useEffect(() => {
        GetFollowers()
            ?.then((response) => {
                setFollowerList(response.data);
            })
            .catch((error) => console.log(error.response.data));
    }, [userList]);

    const handleDelete = (id: number) => {
        setFollowerList(followerList.filter((item) => item.id !== id));
        DeleteFollower(id)
            ?.then((response) => console.log(response))
            .catch((error) => console.log(error));
    };
    const handleCreate = (id: number) => {
        setUserList(userList.filter((item) => item.id !== id));
        CreateFollower(id)
            ?.then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 z-0">
            <div className="col-span-1">
                <div className="h-screen flex overflow-hidden bg-gray-200">
                    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <div className="flex-1 relative z-0 flex overflow-hidden">
                            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" />
                            <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                                <div className="px-6 pt-6 pb-4">
                                    <h2 className="text-lg font-medium text-gray-900">Users</h2>
                                </div>
                                {/* Directory list */}
                                <Sidebar userList={userList} button="follow" method={handleCreate} />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 p-12 grid gap-6">
                <div className="flex justify-center">
                    <h2 className="text-lg font-medium text-gray-900 mt-3">Tweets</h2>
                </div>

                {tweetList.map((tweet: tweets) => (
                    <div key={tweet.id} className="rounded overflow-hidden shadow-lg bg-yellow-100">
                        {tweet.image ? (
                            <div className="w-full">
                                <img src={tweet.image} alt={tweet.text} className="w-full" />
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="px-2 pb-5">
                            <h1 className="text-4xl justify-between font-bold">{tweet.text}</h1>
                        </div>
                        <div className="flex items-center pb-5 px-5">
                            <div className="w-1/3 flex flex-col gap-4">
                                <div className="text-sm">
                                    <p className="leading-none ml-2">By {tweet.author}</p>
                                </div>
                                <div className="text-sm">
                                    <p className="leading-none ml-2">Date {tweet.created_at.split('T')[0]}</p>
                                </div>
                            </div>
                            <div className="w-1/3" />
                            <div className="w-1/3 float-right text-right" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-span-1">
                <div className="h-screen flex overflow-hidden bg-gray-200">
                    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <div className="flex-1 relative z-0 flex overflow-hidden">
                            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" />
                            <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                                <div className="px-6 pt-6 pb-4">
                                    <h2 className="text-lg font-medium text-gray-900">Followers</h2>
                                </div>
                                {/* Directory list */}
                                <Sidebar userList={followerList} button="unfollow" method={handleDelete} />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetSection;
