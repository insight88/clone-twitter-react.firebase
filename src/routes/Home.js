import { dbService } from 'fbase';
import React, { useState, useEffect } from 'react';
import Tweet from 'components/Tweet';
import TweetFactory from 'components/TweetFactory';

const Home = ({ userObj }) => {
  // * App.js :onAuthStateChanged -> Router.js : AppRouter에서 userObj 전달 -> Home.js
  const [tweets, setTweets] = useState([]);
  // const getTweets = async () => {
  //   const nt = await dbService.collection('tweets').get();
  //   // * get() method는 collection의 QuerySnapshot을 return
  //   nt.forEach((document) => {
  //     const tweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setTweets((prev) => [tweetObject, ...prev]);
  //   });
  // };
  // ! not real-time message displaying

  useEffect(() => {
    dbService.collection('tweets').onSnapshot((snapshot) => {
      // ? collection().onSnapshot() : collection에 대한 event listening observer
      // * event가 발생 시 callback을 실행한 후 결과를 return
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);
  // ! real-time message displaying

  return (
    <div>
      <TweetFactory userObj={userObj} />
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
