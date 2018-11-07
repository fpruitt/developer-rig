import * as React from 'react';
import './component.sass';

export class LoginButton extends React.Component<{}>{
  public render() {
    const rigAuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.RIG_CLIENT_ID}&redirect_uri=${process.env.RIG_URL}&response_type=token&scope=user:edit+extensions:edit:catalog`;
    return (
        <a href={rigAuthUrl}>
          <button className='login-button'>Sign In</button>
        </a>
    );
  }
}
