import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const localizer = momentLocalizer(moment);

const Timetable = ({ data }) => {
  const myEventsList = data.map((event, i) => {
    return {
      id: i,
      title: event.activity,
      start: new Date(event.date),
      end: new Date(moment(event.date).add(event.duration, 'minutes')),
    };
  });

  return (
    <div>
      <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
};

export default Timetable;
