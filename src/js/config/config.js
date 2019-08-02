const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
    console.error(result.error);
    throw result.error;
}

const config = {
    app: {
        port: process.env.FEEDBACK_LOOP_PORT
    },
    db: {
        url: {
            server: process.env.FEEDBACK_LOOP_DB_SERVER,
            port: process.env.FEEDBACK_LOOP_DB_PORT,
        },
        name: process.env.FEEDBACK_LOOP_DB_NAME,
        user: {
            name: process.env.FEEDBACK_LOOP_DB_USER_NAME,
            password: process.env.FEEDBACK_LOOP_DB_USER_PASSWORD,  
        },
    },
    session: {
        secret: process.env.FEEDBACK_LOOP_SESSION_SECRET,
    }
};

module.exports = config;
