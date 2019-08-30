import React from 'react';

import './Home';

const Home = () => (
  <div>
    <div className="container">
      <h1>No Place Like Home</h1>
      <h3>
        Thank you for visiting the No Place Like Home in Marion, Iowa website!
      </h3>
      <p>
        No Place Like Home offers many different services and delightful appeal with the family members involved.
        With every visit we have with your pets are sure to be special as we enjoy the moments just as much, without a doubt!
      </p>
    </div>
    <div className="trips-full">
      <div className="trips-holder">
        <div>
          <span>
            Trip Section 1
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales id sem nec pharetra. 
        </div>
        <div>
          <span>
            Trip Section 2
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales id sem nec pharetra. Nunc auctor dui nulla, ac ultricies ligula sollicitudin vitae. 
          Pellentesque vestibulum blandit nisl, a pretium magna mattis ac. Nullam diam sapien, mollis vitae elit commodo, sodales fermentum enim.
        </div>
        <div>
          <span>
            Trip Section 3
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales id sem nec pharetra. Nunc auctor dui nulla, ac ultricies ligula sollicitudin vitae.
        </div>
      </div>
    </div>
  </div>
);

export default Home;