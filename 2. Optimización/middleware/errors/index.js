import ErrorEnum from "../../services/errors/enums.js";

export default (error, req, res, next) => {
    console.log(error.cause);
    switch (error.code) {
        case ErrorEnum.INVALID_TYPES_ERROR:
            res.send({ status: 'Error', error: error.name });
            break;
            
            case ErrorEnum.INVALID_PARAM:
                res.send({ status: 'Error', error: error.name });
                break;

        default:
            res.send({ status: 'Error', error: 'Unhandled error' });
            break;
    }
}