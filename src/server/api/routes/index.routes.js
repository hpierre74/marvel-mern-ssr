import express from 'express';
import favoriteRoutes from './favorite.route';


const router = express.Router(); // eslint-disable-line new-cap


// mount favorites routes at /favorites
router.use('/favorites', favoriteRoutes);


export default router;