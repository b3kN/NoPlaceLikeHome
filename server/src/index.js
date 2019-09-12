import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

// Routes
app.use('/availability', routes.availability);

// Start
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Users.deleteMany({}),
      models.Availability.deleteMany({})
    ]);

    createAvailability();
  }

  app.listen(process.env.PORT, () =>
    console.log(`No Place Like Home Server app listening on port ${process.env.PORT}!`),
  );
});

const createAvailability = async () => {
  const availability = new models.Availability({
    user: 'admin',
    weekends: false,
    startTime: 8,
    endTime: 17,
    increment: 30,
    daysOff: ['09162019','09172019']
  });

  await availability.save();
};
