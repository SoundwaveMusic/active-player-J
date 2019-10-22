const getTime = (timeframe) => {
  const min = Math.floor(timeframe / 60);
  const sec = Math.floor(timeframe % 60);
  const zeroPaddedSec = (sec < 10) ? `0${sec}` : sec;
  return `${min}:${zeroPaddedSec}`;
};

export default getTime;
