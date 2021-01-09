const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//  /api/comments/<pizzaId>
router 
    .route('/:pizzaId')
    .post(addComment);

//  /api/comments/<pizzaId>/<commentId>
// need both Ids because need to know pizza connected to the comment
router 
    .route('/:pizzaId/:commentId')
    .delete(removeComment);
module.exports = router;


