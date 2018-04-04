import Favorite from "../models/favorite.model";
import cuid from "cuid";

class FavoriteController {
  static getFavorites(req, res) {
    Favorite.find().exec((err, favorites) => {
      err ? res.status(404).send() : res.json(favorites)
    })
  }
  static getFavorite(req, res) {
    Favorite.findOne({ _id: req.params.favoriteId }).exec((err, favorite) => {
      err ? res.status(500).send(err): res.json({ favorite });
    });
  }

  static addFavorite(req, res) {
    let newFavorite = new Favorite(req.body);
    newFavorite.cuid = cuid();
    Favorite.create(newFavorite,(err, favorite) => {
      err? res.status(500).send(err) : res.json({ favorite })
    })
  }

  static deleteFavorite(req, res) {
    Favorite.findOne({ _id: req.params.favoriteId }).exec((err, favorite) => {
        err? res.status(500).send(err) : res.status(200).end()
    });
  }
}
export default FavoriteController;