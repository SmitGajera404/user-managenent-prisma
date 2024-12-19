import express from 'express';
import { testApi } from '../Controllers/Api-controller/api-controller.js';
import { deleteUser, getUser, onboardUser } from '../Controllers/Api-controller/user-controller.js';
import { addPost, deletePost, getPost, updatePost } from '../Controllers/Api-controller/post-controller.js';
import { addComment, deleteComment, getComment, updateComment } from '../Controllers/Api-controller/comment-controller.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to your new Node.js project!');
});

router.post('/onboard', onboardUser)
router.get('/user',getUser);
router.post('/addPost', addPost)
router.get('/post',getPost);
router.patch('/updatePost',updatePost)
router.delete('/user/delete/:id', deleteUser)
router.delete('/post/delete/:id', deletePost)
router.post('/addComment', addComment)
router.patch('/updateComment', updateComment)
router.delete('/comment/delete/:id', deleteComment)
router.get('/comment', getComment)
router.get('/test', (req, res) => {
    testApi(req,res)
});

export default router;
