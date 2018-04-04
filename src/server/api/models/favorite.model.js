import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const favoriteSchema = new Schema({
    // id: { type: String, required: true},
    name: { type: String, required: true },
    // description: { type: String },
    // apparitions: { type: Number },
    // firstComics: { type: Array },
    // avatar: { type: String, required: true },

})


favoriteSchema.static('create', function(favorite, callback) {
    return favorite.save((err, newFavorite) => {
        return callback(err, newFavorite);
    })
})
export default mongoose.model('Favorite', favoriteSchema);;