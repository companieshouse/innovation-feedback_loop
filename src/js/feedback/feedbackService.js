const Feedback = require('./feedback');

exports.create = function(ip, name, directorate, feedback) {
    let newFeedback = new Feedback({
        data: {
            name: name,
            directorate: directorate,
            feedback: feedback
        },
        created: Date.now()
    });

    return newFeedback.save();
};