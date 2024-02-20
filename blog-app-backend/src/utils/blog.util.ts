import { RequestFile } from '../interfaces/request.interface';
import { existsSync } from 'node:fs';
import jsdom from 'jsdom';
import {
  ALLOWED_FILE_EXT,
  EXCERPT_SIZE,
  MAX_FILE_SIZE
} from '../config/constants.config';

const getLastYear = () => {
  const current = new Date();
  const lastYear = new Date(new Date().setFullYear(current.getFullYear() - 1));

  return lastYear;
};

const validateFile = (file: RequestFile) => {
  if (!file || !existsSync(file.path)) {
    throw new Error('NO_FILE_STORED_ERROR');
  }

  const fileExt = file.originalname.split('.')[1];
  const allowedExtensions = ALLOWED_FILE_EXT;

  if (allowedExtensions.indexOf(fileExt) === -1) {
    throw new Error('INVALID_EXTENSION_FILE_ERROR');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('MAX_FILE_SIZE_ERROR');
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

const buildExcerpt = (content: string) => {
  const dom = new jsdom.JSDOM();
  const document = dom.window.document;
  const element = document.createElement('div');

  const slicedContent = content.slice(0, EXCERPT_SIZE).replace(/\\n/g, '');

  element.innerHTML = slicedContent;
  return element.textContent as string;
};

export { getLastYear, validateFile, buildFileName, buildTagList, buildExcerpt };
