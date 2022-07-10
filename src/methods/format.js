import moment from 'moment';
import tz from 'moment-timezone';

const formatTime = (time) => {
  const date = moment().tz('Asia/Taipei').subtract(1, 'days');
  if (moment(time).isBefore(date)) {
    return moment(time).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm');
  }
  return moment(time).fromNow();
};

const formatFollowTime = (time) =>
  moment(time).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm');

const formatContent = (content) => {
  if (content === '') return;
  const res = content.replace(/\n/g, '<br>');
  return res;
};

export { formatTime, formatFollowTime, formatContent };
