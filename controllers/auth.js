const crypto = require('crypto');

exports.register = async (request, response, next) => {
    // const { username, email, password } = request.body;

    try {
        response.send("Register");
    } catch (error) {
    }
};

exports.login = async (request, response, next) => {
    // const { email, password } = request.body;

    try {


    } catch (error) {
    }

};

exports.forgotPassword = async (request, response, next) => {
    // const { email } = request.body;

    try {
        try {
        } catch (error) {
        }

    } catch (error) {
    }
};

exports.resetPassword = async (request, response, next) => {
    // const resetPasswordToken = crypto.createHash('sha256').update(request.params.resetToken).digest('hex');

    try {
    } catch (error) {
    }
};


const sendToken = (user, statusCode, response) => {
    // const token = user.getSignedToken();
    // response.status(statusCode).json({ success: true, token });
}