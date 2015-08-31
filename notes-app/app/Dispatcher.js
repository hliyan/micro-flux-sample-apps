import uflux from 'micro-flux';
import NoteStore from './notes/NoteStore';

class AppDispatcher extends uflux.Dispatcher {
    constructor() {
        super();
        this.register('notes', new NoteStore());
    }
}

export default new AppDispatcher();