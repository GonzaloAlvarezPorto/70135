import { Router } from "express";
import CustomError from "../services/errors/CustomError.js";
import ErrorEnum from '../services/errors/enums.js'
import { generateSingleUserError, generateUserErrorInfo } from "../services/errors/generateUserErrorInfo.js";

const users = [];

const router = Router();

router.get('/', (req, res) => {
    res.send({ message: 'success', payload: users })
})

router.get('/:uid', (req, res) => {
    const userId = +req.params.uid;
    if (userId <= 0 || isNaN(userId)) {
        CustomError.createError({
            name: 'Find user failed',
            cause: generateSingleUserError(userId),
            message: 'Error trying to find a single user',
            code: ErrorEnum.INVALID_PARAM
        })
    }
    const user = users.find(u => u.id === userId);
    res.send({ message: 'success', payload: user })
});

router.post('/', (req, res) => {
    const { first_name, last_name, age, email } = req.body;

    if (!first_name || !last_name || !age || !email) {
        CustomError.createError({
            name: 'User creation failed',
            cause: generateUserErrorInfo(req.body),
            message: 'Error trying to create a user',
            code: ErrorEnum.INVALID_TYPES_ERROR
        })
    }

    const user = {
        first_name,
        last_name,
        age,
        email
    }

    if (users.length === 0) {
        user.id = 1
    }
    else {
        user.id = users[users.length - 1].id + 1;
    }

    users.push(user);

    res.send({ status: 'success', payload: users })
})

export default router;