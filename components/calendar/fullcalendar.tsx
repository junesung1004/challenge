import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    );
  }
}
