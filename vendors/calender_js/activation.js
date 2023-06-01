
if($('#calendar').length > 0){
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
    height: 'parent',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    defaultView: 'dayGridMonth',
    defaultDate: '2020-05-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2020-05-01',
        color: '#9267FF' // override!
      },
      {
        title: 'Long Event',
        start: '2020-05-07',
        end: '2020-05-10',
        color: '#4BE69D' // override!
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-05-09T16:00:00',
        color: '#9267FF' // override!
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-05-16T16:00:00',
        color: '#F13D80' // override!
      },
      {
        title: 'Conference',
        start: '2020-05-11',
        end: '2020-05-13',
        color: '#9267FF' // override!
      },
      {
        title: 'Meeting',
        start: '2020-05-12T10:30:00',
        end: '2020-05-12T12:30:00',
        color: '#9267FF' // override!
      },
      {
        title: 'Lunch',
        start: '2020-05-12T12:00:00',
        color: '#B235DC' // override!
      },
      {
        title: 'Meeting',
        start: '2020-05-12T14:30:00',
        color: '#9267FF' // override!
      },
      {
        title: 'Happy Hour',
        start: '2020-05-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2020-05-12T20:00:00',
        color: '#9267FF' // override!
      },
      {
        title: 'Birthday Party',
        start: '2020-05-13T07:00:00',
        color: '#9267FF' // override!
      }
    ]
  });

  calendar.render();
});
}

// calender 2
if($('#calendar2').length > 0){
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar2');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'timeGrid', 'list', 'interaction' ],
      // header: {
      //   center: 'basicDay,basicWeek,month',
      //   left: 'title',
      //   right: 'prev,next',
      // },
      height: 505,
      header: {
        left: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth',
        center: 'prev,next',
      },
      fixedWeekCount: false,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      aspectRatio: 1.8,
      events: [{
        title: 'All Day Event',
        start: '2019-04-01'
      },

      {
        title: 'Meeting',
        start: '2019-04-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2019-04-15T17:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-04-20T07:00:00'
      }
    ]
    });

    calendar.render();
  });
}