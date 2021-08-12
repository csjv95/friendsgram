const localTime = (time) => {
  const data = new Date(time).toLocaleTimeString();

  return data;
};

export default localTime;
