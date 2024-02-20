import AuthState from './auth.state';
import CacheState from './cache.state';
import ConfigState from './config.state';
import CRFState from './crf.state';
import ProjectsState from './projects.state';
import SearchbarState from './searchbar.state';
import SidebarState from './sidebar.state';

export type AppStateType = {
  auth: AuthState;
  cache: CacheState;
  crf: CRFState;
  config: ConfigState;
  projects: ProjectsState;
  sidebar: SidebarState;
  searchbar: SearchbarState;
};

export {
  AuthState,
  CacheState,
  CRFState,
  ConfigState,
  ProjectsState,
  SidebarState,
  SearchbarState
};
