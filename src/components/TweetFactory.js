import React, { useState } from 'react';
import { storageService, dbService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';

const TweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState('');
  const [attachment, setAttachment] = useState('');
  // * image 업로드 객체를 나타내는 attachment, image preview를 위한 state

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentURL;
    // ! 사진 업로드 없이 코멘트만 등록한 경우
    if (attachmentURL !== '') {
      // ! 사진과 코멘트를 같이 등록한 경우
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      // * ref().child('path') : ref로 부터의 상대 경로(path)를 return
      // * uuidv4() : random id를 생성하는 함수
      const response = await attachmentRef.putString(attachment, 'data_url');
      // * putString(data, format) : format에 맞는 data 정보를 string으로 불러온다
      attachmentURL = await response.ref.getDownloadURL();
    }

    const tweetObj = {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      // * userObj.uid는 현재 코멘트를 submit한 user의 id를 나타냄
      attachmentURL,
    };
    await dbService.collection('tweets').add(tweetObj);
    // * firestore().collection("name") ; name이라는 collection에 access
    // * collection : db 폴더 이름, document : 각각의 data (firebase console -> cloud firestore)
    // * add() : collection("name")에 새로운 document를 추가
    setTweet('');
    setAttachment('');
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const image = files[0];
    // * form input에 file을 업로드하면 event.target.files에 array로 저장된다
    const reader = new FileReader();
    // * FilreReader API를 활용
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(image);
  };

  const onClearPhotoClick = () => setAttachment(null);

  return (
    <form onSubmit={onSubmit}>
      <input
        value={tweet}
        onChange={onChange}
        type="text"
        placeholder="What are you thinking?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Tweet" />
      {attachment && (
        // * attachment state !== null일 때, 이미지가 업로드 되었을 때 미리보기와 clear 버튼을 표시
        <div>
          <img src={attachment} width="100px" height="100px" alt="" />
          <button onClick={onClearPhotoClick}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default TweetFactory;
