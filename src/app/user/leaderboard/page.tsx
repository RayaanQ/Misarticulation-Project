"use client"
import React from 'react';
// import Auth from '../utils/auth';
import { AiOutlineLoading } from 'react-icons/ai';

// import { useQuery } from '@apollo/client';
// import { QUERY_USERS } from '../utils/queries';

const Leaderboard = () => {
  // If the user is not logged in, redirect to the login page
  // if (!Auth.loggedIn()) {
  //   return <Navigate to="/login" />;
  // }

  // get the user data from the server
  // const { loading, data } = useQuery(QUERY_USERS);
  // users {
  //   _id
  //   username
  //   email
  //   createdAt
  //   experience
  // }

  const users = [{
    username: 'Rayaan',
    experience: 200
  },
  {
    username: 'Aditya',
    experience: 300
  },
  {
    username: 'Yashodhar',
    experience: 400 
  },
  {
    username: 'Pratham',
    experience: 500 
  },
  {
    username: 'Sundaram',
    experience: 600 
  },
  {
    username: 'Sushank',
    experience: 1000 
  },
  {
    username: 'Deep',
    experience: 700 
  }]

  // set the user data to a variable
  // const users = data.username || [];

  // sort the users by experience
  const sortedUsers = [...users].sort((a, b) => b.experience - a.experience);

  // style the first three rankings
  
  const rank = (index: any) => {
    switch (index) {
      case 0:
        return 'ranking-first-style';
      case 1:
        return 'ranking-second-style';
      case 2:
        return 'ranking-third-style';
      default:
        return '';
    }
  };

  return (
    <section
      id="leaderboard"
      className="flex-grow p-6 ml-[300px] overflow-hidden"   
      >
      {/* Page Heading */}
      <h1 className="h1-style mb-8" >Leaderboard</h1>
      {/* font-bold text-xl */}

      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-green-600 to-green-800">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading mb-3">Rise to the top!</h2>
          <p className="text-lg">Be the best and compete with others.</p>
        </div>
        <div className="banner-bg-style bg-connections" />
      </div>

      {/* Leaderboard table */}
      <div className="box-container-style">
        <h2 className="text-xl font-bold mb-4">Rankings</h2>
        <div className="flex flex-col">
          {/* {users && <AiOutlineLoading className="animate-spin h-12 w-12 mx-auto" />} */}

          {sortedUsers.map((user, index) => (
            <div
              key={`id-${user.username}`}
              className="w-auto flex items-center p-2 px-4 gap-4 rounded-xl odd:bg-slate-900/5 dark:odd:bg-slate-900/50"
            >
              <span className={`ranking-index-style ${rank(index)}`}>{index + 1}</span>
              <div className="w-12 h-12 shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center uppercase font-bold text-2xl text-black bg-gradient-to-r from-green-600 to-green-800">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
              </div>

              <div className="flex flex-col flex-grow overflow-hidden">
                <h3 className="font-bold truncate">{user.username}</h3>
                <p className="text-gray-500 dark:text-gray-400 truncate">{user.experience} XP</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;