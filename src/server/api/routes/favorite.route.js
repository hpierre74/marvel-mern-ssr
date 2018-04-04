import express from 'express';
import FavoriteController from '../controllers/favorite.controller';

const router = express.Router(); // eslint-disable-line new-cap

// Get all favorites
router.route('/').get(FavoriteController.getFavorites);

// Get one favorite by cuid
router.route('/:favoriteId').get(FavoriteController.getFavorite);

// Add a new favorite
router.route('/create').post(FavoriteController.addFavorite);

// Delete a favorite by cuid
router.route('/:favoriteId').delete(FavoriteController.deleteFavorite);


export default router;


