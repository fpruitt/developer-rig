import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './component.sass';
import { RigProject } from '../core/models/rig';
import { NavItem } from '../constants/nav-items';
import { UserDropdown } from '../user-dropdown';
import { LocalStorageKeys } from '../constants/rig';
import { UserSession } from '../core/models/user-session';

export interface Props {
  projects: RigProject[];
  createProject: () => void;
}

export class ProjectNav extends React.Component<Props>{
  public render() {
    const session = JSON.parse(localStorage.getItem(LocalStorageKeys.RigLogin)) as UserSession;
    return (
      <div className="project-nav">
        {this.props.projects.map((project, index) => (
          <NavLink key={index} className="project-nav__link" activeClassName="project-nav__link--active" to={`/${index}${NavItem.ProjectOverview}`}>{project.manifest.name}</NavLink>
        ))}
        <button className="project-nav__button" onClick={this.props.createProject}>Add New Project</button>
        {session && session.login && <div className='project-nav__login'>
          <UserDropdown session={session} />
        </div>}
      </div>
    );
  }
}
