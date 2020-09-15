const functions = require('firebase-functions');

exports.disableUser = functions.https.onCall((data, context) => {
    console.log(data);

   return admin.auth().updateUser(data, {
        disabled: true
    }).then(() => {
          return  admin.firestore().collection('users').doc(data).update({ disabled: true})
            .then(() =>  {
                console.log(`Successfully disabled user: ${data}`);

                return 200;
            })
            .catch((error => console.log(error)));        
    }).catch( error => console.log(error));

    return 500;
});