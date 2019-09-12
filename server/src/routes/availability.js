import { Router } from 'express';

const router = Router();

router.get('/:userId', async (req, res) => {
  const availability = await req.context.models.Availability.findByUser(
    req.params.userId,
  );
  return res.send(availability);
});

export default router;
