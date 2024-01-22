import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

/**
 * USERNAME VALIDATION
 * This regex will enforce these rules:

    At least 8-20 characters long
    Not allow _ or . at the beginning
    Not allow __ or _. or ._ or .. inside
    Allowed characters
    Not allow _ or . at the end

    src: https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
 * 
 */

/**
 * PASSWORD VALIDATION
 * This regex will enforce these rules:

    At least one upper case English letter, (?=.*?[A-Z])
    At least one lower case English letter, (?=.*?[a-z])
    At least one digit, (?=.*?[0-9])
    At least one special character, (?=.*?[#?!@$%^&*-])
    Minimum eight in length .{8,} (with the anchors)

    src: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
 * 
 */

const validateRegisterAuth = [
  body('username')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid Username: required field')
    .custom(async (value) => {
      if (!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(value)) {
        throw new Error('Invalid Username: incorrect format');
      }
    }),

  body('password')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid Password: required field')
    .custom(async (value) => {
      if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          value
        )
      ) {
        throw new Error('Invalid Password: incorrect format');
      }
    }),

  body('name')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid Name: required field')
    .custom(async (value) => {
      if (
        !/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}['\-]?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/.test(
          value
        )
      ) {
        throw new Error('Invalid Name: incorrect format');
      }
    }),

  body('email')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid Email: required field')
    .custom(async (value) => {
      if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
        throw new Error('Invalid Email: incorrect format');
      }
    }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  }
];

const validateLoginAuth = [
  body('username')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid Username: required field')
    .custom(async (value) => {
      if (!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(value)) {
        throw new Error('Invalid Username: incorrect format');
      }
    }),

  body('password')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid Password: required field')
    .custom(async (value) => {
      if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          value
        )
      ) {
        throw new Error('Invalid Password: incorrect format');
      }
    }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  }
];

export { validateRegisterAuth, validateLoginAuth };
