import { dbService } from 'fbase';
import React, { useState, useEffect } from 'react';

const Home = ({ userObj }) => {
  // * App.js :onAuthStateChanged -> Router.js : AppRouter에서 userObj 전달 -> Home.js
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const getTweets = async () => {
    const nt = await dbService.collection('tweets').get();
    // * get() method는 collection의 QuerySnapshot을 return
    nt.forEach((document) => {
      const tweetObject = {
        ...document.data(),
        id: document.id,
      };
      setTweets((prev) => [tweetObject, ...prev]);
    });
  };
  useEffect(() => {
    getTweets();
    // dbService.collection('tweets').onSnapshot((snapshot) => {
    //   console.log('new tweet');
    // });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      // * userObj.uid는 현재 코멘트를 submit한 user의 id를 나타냄
    });
    // * firestore().collection("name") ; name이라는 collection에 access
    // * collection : db 폴더 이름, document : 각각의 data (firebase console -> cloud firestore)
    // * add() : collection("name")에 새로운 document를 추가
    setTweet('');
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="What are you thinking?"
          maxLength={120}
        />
        <input type="submit" value="tweet" />
      </form>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <h3>{tweet.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
