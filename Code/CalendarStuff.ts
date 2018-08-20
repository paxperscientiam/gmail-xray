function CalendarHandler() {
    var today = new Date();

    this.calendar = CalendarApp.getDefaultCalendar();
    //
    this.name = this.calendar.getName();
    this.eventsToday = this.calendar.getEventsForDay(today);

}
