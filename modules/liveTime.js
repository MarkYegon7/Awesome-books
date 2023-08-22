import { DateTime } from './luxon.min.js';

const showLiveTime = () => {
  const displayDateTime = document.getElementById('dateTime');
  const dateTime = DateTime.now(); // Get the current date and time using Luxon

  const formatedDateTime = dateTime.toLocaleString(DateTime.DATETIME_MED);
  displayDateTime.innerHTML = formatedDateTime;

  setTimeout(showLiveTime, 1000);
};

export default showLiveTime;