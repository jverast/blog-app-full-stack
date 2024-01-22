import { Router } from 'express';
import { readdir, readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
  return filename.replace(/.route.[jt]s/, '');
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (!/index.[jt]s/.test(cleanName)) {
    import(`./${cleanName}.route`).then((moduleRouter) => {
      console.log(`/api/${cleanName}`);
      router.use(`/api/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
