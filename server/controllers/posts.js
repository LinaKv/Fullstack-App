// 4 posts

import Post from "../models/Post.js";
import User from "../models/User.js";

// 5 posts
// create
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    // 100% save
    await newPost.save();

    // all posts
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// read
export const getFeedPosts = async (req, res) => {
  try {
    // all posts
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    // all posts
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// update
export const likePost = async (req, res) => {
  try {
    // who is liked
    const { id } = req.params;
    // who likes
    const { userId } = req.body;

    const post = await Post.find({ id });
    const isLiked = post.likes.get(userId);

    if (isLikes) {
      post.likes.delete(userId);
    } else {
      // likes are map
      post.likes.set(userId, true);
    }

    const updatePost = await Post.findByIdAndUpdate(id, { likes: post.likes }, { new: true });

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
