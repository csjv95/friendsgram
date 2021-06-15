import React, { useEffect, useState } from 'react';
import getMyBookMarkPostId from '../../service/bookMark/getMyBookMarkPostId';

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