import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import CacheReducer from './cache.reducer';
import ConfigReducer from './config.reducer';
import CRFReducer from './crf.reducer';
import ProjectsReducer from './projects.reducer';
import SidebarReducer from './sidebar.reducer';
import SearchbarReducer from './searchbar.reducer';

const Reducer = combineReducers({
  auth: AuthReducer,
  cache: CacheReducer,
  crf: CRFReducer,
  config: ConfigReducer,
  projects: ProjectsReducer,
  sidebar: SidebarReducer,
  searchbar: SearchbarReducer,
});

export default Reducer;
