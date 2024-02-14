import { RequestFile } from '../interfaces/request.interface';
import { existsSync } from 'node:fs';

const getLastYear = () => {
  const current = new Date();
  const lastYear = new Date(new Date().setFullYear(current.getFullYear() - 1));

  return lastYear;
};

const validateFile = (file: RequestFile) => {
  if (!file || !existsSync(file.path)) {
    throw new Error('NO_FILE_STORED');
  }

  const fileExt = file.originalname.split('.')[1];
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

  if (allowedExtensions.indexOf(fileExt) === -1) {
    throw new Error('EXTENSION_NOT_ALLOWED');
  }

  if (file.size > 5000000000) {
    throw new Error('MAX_SIZE_ALLOWED');
  }

  return file;
};

const buildFileName = (file: Express.Multer.File) => {
  const fileExt = file.originalname.split('.')[1];
  const fileName = file.path.split('\\').pop();
  return `${fileName}.${fileExt}`;
};

const buildTagList = (tags: string | string[]) => {
  if (typeof tags === 'object') return tags;
  return tags.split(/,\s?/).map((tag) => tag.trim());
};

export { getLastYear, validateFile, buildFileName, buildTagList };
