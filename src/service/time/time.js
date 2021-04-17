const time = (timestamp) => {
  // const start = timestamp; //posting한 시간
  // const end = Date.now(); // 현재 시간


  const translate = (start = timestamp, end = Date.now()) => {
    const time = end - start;
    const timeYear = Math.floor(time / 1000/60/60/24/12/365);
    const timeMonth = Math.floor(time / 1000/60/60/24/12);
    const timeday = Math.floor(time / 1000/60/60/24);
    const timeHours = Math.floor(time / 1000/60/60);
    const timeMinutes = Math.floor(time / 1000/60 );

    return console.log(timeMinutes,end,start); 
  }
  return translate()
  //console.log(Math.floor(time/1000/60/60/24/365));
};

export default time;
