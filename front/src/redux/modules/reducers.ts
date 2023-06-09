import localChange from './localChange/reducers';
import navigate from './navigate/reducers';
import details from './details/reducers';
import search from './search/reducers';

export default {
  ...localChange,
  navigate,
  details,
  search,
};
