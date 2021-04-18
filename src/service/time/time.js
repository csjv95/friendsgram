const time = (timestamp) => {
  const start = timestamp;
  const end = Date.now();
  const time = end - start;

  const timeYear = Math.floor(time / 1000 / 60 / 60 / 24 / 12 / 365);
  const timeMonth = Math.floor(time / 1000 / 60 / 60 / 24 / 12);
  const timeday = Math.floor(time / 1000 / 60 / 60 / 24);
  const timeHours = Math.floor(time / 1000 / 60 / 60);
  const timeMinutes = Math.floor(time / 1000 / 60);
  const timeSeconds = Math.floor(time / 1000);

  const translate = () => {
    if (time > 31557599999) {
      return `${timeYear}년 전`;
    } else if (time > 2629799999) {
      return `${timeMonth}개월 전`;
    } else if (time > 86399999) {
      return `${timeday}일 전`;
    } else if (time > 3599999) {
      return `${timeHours}시간 전`;
    } else if (time > 59000) {
      return `${timeMinutes}분 전`;
    } else if( time > 999) {
      return `${timeSeconds}초 전`;
    }
  };
  return translate();
};

export default time;
