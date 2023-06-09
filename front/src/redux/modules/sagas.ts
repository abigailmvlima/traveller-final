import localChange from './localChange/sagas';
import search from './search/sagas';

const dataExport = [...localChange, ...search];
export default dataExport;
