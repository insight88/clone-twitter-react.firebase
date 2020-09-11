import { authService, dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };
  // const getMyTweets = async () => {
  //   const tweets = await dbService
  //     .collection('tweets')
  //     .where('creatorId', '==', userObj.uid)
  //     // * where(path, opStr, value) : value와 operation 조건을 만족하는 것들의 path로 이루어진 Query를 return
  //     .orderBy('createdAt')
  //     .get();
  //   console.log(tweets.docs.map((doc) => doc.data()));
  // };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.upadateProfile({
        displayName: newDisplayName,
      });
    }
  };

  // useEffect(() => {
  //   getMyTweets();
  // }, [getMyTweets]);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type='text'
          placeholder='Display name'
          value={newDisplayName}
        />
        <input type='submit' value='Update Profile' />
      </form>
      <button onClick={onLogOutClick}> Log Out </button>{' '}
    </>
  );
};
