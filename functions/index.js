const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.disableUser = functions.https.onCall((data, context) => {
    return admin.auth().updateUser(data, {
        disabled: true
    }).then(() => {
        return admin.firestore().collection('Users')
            .doc(data)
            .update({ disabled: true })
            .then((data) => {
                console.log(`Successfully disabled user: ${data}`);
                return data;
            })
            .catch((error => {
                console.log(error);
                return error;
            }));
    }).catch(err => {
        console.log(err);
        return err;
    });
});