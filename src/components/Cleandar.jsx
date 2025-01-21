import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';



function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='w-[185px] h-[188px]'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default MyApp