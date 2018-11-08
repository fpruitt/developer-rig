import * as React from 'react';
import * as classNames from 'classnames';
import './component.sass';
import { NavItem } from '../constants/nav-items';
import { UserDropdown } from '../user-dropdown';
import { UserSession } from '../core/models/user-session';
import { ExtensionManifest } from '../core/models/manifest';
import { NavLink } from 'react-router-dom';

export interface PublicProps {
  projectIndex: number,
  manifest: ExtensionManifest,
  deleteProject: () => void,
}

export interface ReduxStateProps {
  session?: UserSession,
  mockApiEnabled?: boolean,
}

type Props = PublicProps & ReduxStateProps;

export class RigNavComponent extends React.Component<Props> {
  public render() {
    const { session, manifest } = this.props;
    const productManagementClass = classNames('offset', 'top-nav-item', {
      'top-nav-item__disabled': !(session && session.login) || !(manifest && manifest.bitsEnabled),
    });
    const configurationServiceClass = classNames('offset', 'top-nav-item', {
      'top-nav-item__disabled': manifest && manifest.configurationLocation !== 'hosted',
    });
      return (
        <div className='top-nav'>
          <div className='personal-bar'>
            {manifest && <div className='personal-bar__ext-name'>
              <span>{manifest.name}</span>
              <button className="personal-bar__button" onClick={this.props.deleteProject}>Delete</button>
            </div>}
            {session && session.login && <div className='top-nav-item__login'>
              <UserDropdown session={session} />
            </div>}
          </div>
          <div className='top-nav__item-container'>
            <NavLink className="offset top-nav-item" to={`/${this.props.projectIndex}${NavItem.ProjectOverview}`} exact={true} activeClassName="top-nav-item__selected">
              Project Overview
            </NavLink>
            <NavLink className="offset top-nav-item" to={`/${this.props.projectIndex}${NavItem.ExtensionViews}`} exact={true} activeClassName="top-nav-item__selected">
              Extension Views
            </NavLink>
            <NavLink className={productManagementClass} to={`/${this.props.projectIndex}${NavItem.ProductManagement}`} exact={true} activeClassName="top-nav-item__selected">
              Manage Bits Products
            </NavLink>
            <NavLink className={configurationServiceClass} to={`/${this.props.projectIndex}${NavItem.ConfigurationService}`} exact={true} activeClassName="top-nav-item__selected">
              Configuration Service
            </NavLink>
          </div>
        </div>
      );
  }
}
