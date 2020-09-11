import { dbService } from 'fbase';
import React, { useState, useEffect } from 'react';
import Tweet from '../components/Tweet';

const Home = ({ userObj }) => {
  // * App.js :onAuthStateChanged -> Router.js : AppRouter에서 userObj 전달 -> Home.js
  const [tweet, setTweet] = useState('');
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
  // const onFileEvent = (event) => {
  //   const {
  //     target: { files },
  //   } = event;
  //   const image = files[0];
  //   // * form input에 file을 업로드하면 event.target.files에 array로 저장된다
  //   const reader = new FileReader();
  //   // * FilreReader API를 활용
  //   reader.onloadend = (finishEvent) => {
  //     console.log(finishEvent);
  //   };
  //   reader.readAsDataURL(image);
  // };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type='text'
          placeholder='What are you thinking?'
          maxLength={120}
        />
        {/* <input type='file' accept='image/*' onChange={onFileEvent} /> */}
        <input type='submit' value='tweet' />
      </form>
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
