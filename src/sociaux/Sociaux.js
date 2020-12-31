import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faInstagram,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';
import './sociaux.css';

class Sociaux extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sociaux">
        <div class="cercle">
          {' '}
          <FontAwesomeIcon
            icon={faFacebook}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {' '}
          <FontAwesomeIcon
            icon={faTwitter}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {' '}
          <FontAwesomeIcon
            icon={faGooglePlus}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {' '}
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {' '}
          <FontAwesomeIcon
            icon={faInstagram}
            className="button-add-new-user-gray"
          />
        </div>
      </div>
    );
  }
}

export default Sociaux;
