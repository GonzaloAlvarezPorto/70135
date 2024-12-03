export const generateUserErrorInfo = (user) => {
    return `One or more properties where incomplete or not valid.
    List of required properties:
    *first_name: needs to be a String, received ${user.first_name}
    *last_name: needs to be a String, received ${user.last_name}
    *email: needs to be a String, received ${user.email}`;
}

export const generateSingleUserError = (uId) => {
    return `The id is not a number or is less than 0. ID: ${uId}`
}