import { Blog } from '../interfaces/blog.interface';
import UserModel from '../models/user.model';
import BlogModel from '../models/blog.model';
import { RequestUser, RequestFile } from '../interfaces/request.interface';
import { isUserDocument } from '../utils/user.util';
import { Request } from 'express';
import {
  getLastYear,
  validateFile,
  buildFileName,
  buildTagList,
  buildExcerpt,
  removeFile
} from '../utils/blog.util';
import fs from 'node:fs';

const get = async (id: string) => {
  const blog = await BlogModel.findById(id);
  return blog;
};

const getAll = async (req: Request) => {
  const { latest, tags } = req.query;

  if (latest && !tags && latest === 'true') {
    const lastYear = getLastYear();
    return await BlogModel.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } }
      }
    ]);
  }

  if (!latest && tags) {
    const tagList =
      String(tags).indexOf(',') === -1 ? [tags] : String(tags).split(',');
    return await BlogModel.aggregate([
      {
        $match: { tags: { $in: tagList } }
      }
    ]);
  }

  if (latest && latest === 'true' && tags) {
    const lastYear = getLastYear();
    const tagList =
      String(tags).indexOf(',') === -1 ? [tags] : String(tags).split(',');
    return await BlogModel.aggregate([
      {
        $match: { createdAt: { $gte: lastYear }, tags: { $in: tagList } }
      }
    ]);
  }

  return await BlogModel.find({});
};

const create = async (blog: Blog, file: RequestFile, user: RequestUser) => {
  if (!isUserDocument(user)) {
    throw new Error('NO_USER_EXISTS_ERROR');
  }

  const userToUpdate = await UserModel.findById(user.id);
  if (!userToUpdate) {
    throw new Error('INVALID_USER_ERROR');
  }

  const validatedFile = validateFile(file);
  const newFileName = buildFileName(validatedFile);

  fs.renameSync(
    validatedFile.path,
    `./src/uploads/images/blog/featured/${newFileName}`
  );

  const tags = buildTagList(blog.tags);
  const excerpt = buildExcerpt(blog.content);

  const blogToCreate = {
    ...blog,
    excerpt,
    user: user.id,
    featuredImage: newFileName,
    tags
  };

  const createdBlog = await BlogModel.create(blogToCreate);

  userToUpdate.blogs = userToUpdate.blogs
    ? userToUpdate.blogs.concat(createdBlog.id)
    : [];

  await userToUpdate.save();

  return createdBlog;
};

const update = async (id: string, body: Blog) => {
  const updatedBlog = await BlogModel.findByIdAndUpdate(id, body, {
    new: true
  });
  return updatedBlog;
};

const remove = async (id: string, user: RequestUser) => {
  // Eliminar el blog de la list de blogs del usuario
  if (!isUserDocument(user)) {
    throw new Error('NO_USER_EXISTS_ERROR');
  }

  const userToUpdate = await UserModel.findById(user.id);
  if (!userToUpdate) {
    throw new Error('INVALID_USER_ERROR');
  }

  const blogToDelete = await BlogModel.findById(id);
  const featuredImage = blogToDelete?.featuredImage;

  await BlogModel.findByIdAndDelete(id);

  userToUpdate.blogs = userToUpdate.blogs?.filter(
    (blog) => String(blog) !== id
  );
  await userToUpdate.save();

  // Eliminar la imagen de uploads/
  featuredImage && removeFile(featuredImage);
};

export default { create, getAll, get, update, remove };
