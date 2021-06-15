import React, { useEffect, useState } from 'react';
import getMyBookMarkPostId from '../../service/bookMark/getBookMarkPostId';

const Saved = () => {
  const [bookMarkPosts, setBookMarkPosts] =useState([]);

  useEffect(()=> {
    getMyBookMarkPostId(setBookMarkPosts);
  },[])

  return (
    <div>
      {console.log(bookMarkPosts)}
    </div>
  );
};

export default Saved;