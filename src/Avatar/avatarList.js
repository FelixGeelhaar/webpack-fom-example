import React from 'react';

// Import needed component
import Avatar from './avatar';

// Import needed image
import hubot from '../../assets/images/hubot.jpg';

// Import needed styles
import './avatarlist.scss';

export default({ avatars, query }) =>
  query ?
  <div id="avatars">
    <img src={hubot} alt="Hubot" />
    <h2>{`${query}'s followers: ${avatars.length}`}</h2>
    <div id="avatarlist">
      {avatars.map( avatar => <Avatar key={avatar.login} url={avatar.avatar_url} altText={avatar.login} /> )}
    </div>
  </div> : null;
