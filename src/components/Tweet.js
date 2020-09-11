import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm('Are you sure? Delete?');
    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
      // ? firestore.doc("path") : path에 존재하는 DocumentReference Object를 가져옴
      await storageService.refFromURL(tweetObj.attachmentURL).delete();
      // ? refFromURL('path').delete() : path라는 절대 경로에를 참조한 후 지움
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweets/${tweetObj.id}`).update({
      text: newTweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTweet(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              placeholder='Edit your tweet'
              value={newTweet}
              required
              onChange={onChange}
            />
            <input type='submit' value='Update Tweet' />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {tweetObj.attachmentURL && (
            <img
              src={tweetObj.attachmentURL}
              width='100px'
              height='100px'
              alt=''
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Tweet</button>
              <button onClick={toggleEditing}>Edit Tweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;