import React from 'react';

import './Services';

// TODO: Finish implementing simple scheduling service which restricts days listed my owner for already booked or busy days.
// TODO: Create user interface to select date / time frames for interval of time between the available start and end times listed by owner.
// TODO: Create portal for owner to view messages as well as scheduling requests.


const Services = () => (
  <div>
    <div className="container">
      <h1>Services</h1>

      <p>
        No Place Like Home offers several different kinds of services that are not featured in many other places that come at no extra requirements from the families.
        In addition to the standard services, No Place Like Home offers a special touch of creativity by connecting you with your pet while you're away via pictures, video, and even updates of how events are going!
        These items are not something that requries any extra commitements other than an initial meeting and discovery with all members of the family.
      </p>

      <p>
        Most dates and prices will be determined upon a first meeting, but refer to the items below as a general idea of expectations and costs:
      </p>
    </div>
    <div className="trips-full">
      <div className="trips-holder">
        <div>
          <span className="img-background home" />

          <span>
            Meet and Greet
          </span>
          Meeting with potential new clients and their pets. 
        </div>
        <div>
          <span className="img-background heart" />

          <span>
            Caring visits in your own home
          </span>
          30 minutes • $15 per visit up through the 3rd per day
          Subsequent same day, just $10 per visit 
        </div>
        <div>
          <span className="img-background camera" />

          <span>
            Discounts for continuous days
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales id sem nec pharetra. Nunc auctor dui nulla, ac ultricies ligula sollicitudin vitae.
        </div>
      </div>
    </div>
    <div className="container">
      <p>
        If you're looking to schedule something right away, please select the expected date(s) to set up an appointment or pet-sitting dates:
      </p>
    </div>
  </div>
);

export default Services;