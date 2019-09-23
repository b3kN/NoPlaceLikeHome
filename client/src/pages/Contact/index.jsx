import React from 'react';

import './Contact';

// TODO: Build form for simple name, return email, and inquiry box.
// TODO: Connect form to mongo DB and node mail sender.
// TODO: Implement social media badges

class Contact extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Contact Us</h1>
          <h3>
            Priscilla Ring
          </h3>
          <p>
            To contact No Place Like Home directly please use the following form to make an inquiry, or connect via Facebook at any time!
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
