
import { DateTime } from './luxon.js';

export default () => {
  const timeDisplay = document.getElementById('dateTime');
  const dateString = DateTime.now();
  const formattedString = dateString.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  timeDisplay.textContent = formattedString;
};