import { RequestUser } from '../interfaces/request.interface';
import { UserDocument } from '../interfaces/documents.interface';

const isUserDocument = (user: RequestUser): user is UserDocument => {
  return Boolean(user && typeof user === 'object');
};

export { isUserDocument };
