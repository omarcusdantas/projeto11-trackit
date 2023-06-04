import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

function TodayDate() {
    dayjs.locale('pt-br');
    const currentDate = dayjs().format('dddd, DD/MM');
    const capitalizedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

    return <h2 data-test="today">{capitalizedDate}</h2>;
};
  
export default TodayDate;