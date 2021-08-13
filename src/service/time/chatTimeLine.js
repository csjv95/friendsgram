const chatTimeLine = (time) => {
  const curTime = new Date(Date.now()).toDateString();
  const lastTime = new Date(time).toDateString();
  // const a = [];
  // const b = [];

  // curTime === lastTime ? a.push(lastTime) : b.push(lastTime);
  // const setA = new Set(a);
  // const setB = new Set(b);

  return curTime === lastTime ? lastTime : lastTime;
};

export default chatTimeLine;
