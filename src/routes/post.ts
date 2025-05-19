const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
router.get('/post', postController.getAllPosts);  /* all reportages  */
router.get('/all', postController.getPosts);  /* all reportages  */
router.get('/longsformats', postController.getPostsLeLongsFormats);  /* all longs formats  */
router.get('/emissions' , postController.getPostsEmissions)  /* all emissions */
router.get('/captations' , postController.getPostsCaptations) /* all captations  */
router.get('/lepailladin' , postController.getPostsLePailladin) /* all le pailladin  */
router.get('/last', postController.getPostsLast);/* last reportages  */
router.get('/last/longsformats', postController.getLastLongsFormats) /* last longs formats */
router.get('/last/captations', postController.getLastCaptations) /* last captations  */
router.get('/last/emissions', postController.getLastEmissions) /* last emissions */
router.get('/last/pailladin', postController.getLastLePailladin) /* last le pailladin  */
router.get('/:id', postController.getPostByID); // Note: Use :id for dynamic ID
router.post('/:id/like', postController.incrementLike); // Added parameter for post ID
router.post('/:id/likedeux', postController.incrementLikeDeux); // Added parameter for post ID
module.exports = router;
