class EventRepository
{
    static getAll()
    {
        const data = localStorage.getItem('events');
        return data ? JSON.parse(data) : [];
    }

    static save(event)
    {
        const events = EventRepository.getAll();

        events.push(event);

        localStorage.setItem('events', JSON.stringify(events));
    }
}