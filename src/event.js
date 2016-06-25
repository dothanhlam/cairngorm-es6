import EventDispather from 'dispatcher';

class Event {
    constructor(type, data) {
        this.type = type;
        this.data = data || {};
    }

    dispatch() {
        return EventDispather.dispatchEvent(this);
    }
};

export default Event;

