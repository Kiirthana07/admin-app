const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);


exports.disableUser = functions.https.onCall((data, context) => {
    console.log(data);
    return admin.auth().updateUser(data, {
        disabled: true
    }).then(() => {
        return admin.firestore().collection('Users').doc(data).update({ disabled: true })
            .then(() => {
                console.log(`Successfully disabled user: ${data}`);
                return 200;
            }).catch((error => console.log(error)));
    }).catch(error => console.log(error));
});

// remaining functions will go below


// firestore instance from admin
const firestore = admin.firestore();

const ADMIN_EMAIL = 'fibreinternet2020@gmail.com';

/* 
1. donationPosted - When donor posted a donation. [done]
2. requestPosted - When receiver posted a donation request. [done]
3. userSignUp - When new user sign up to the app. [done]
4. donationRequestAccepted - When a donor accepts a donation request. [done]
5. donationAccepted - When a receiver accepts a donation. [done]
*/

// 1. When donor posted a food donation.
exports.donationPosted = functions.firestore
.document('Foods/{docId}')
.onCreate((snap, context) => {


    // fetch email list and send emails
    return fetchEmailList('receiver')
    .then( emailList => {

        return sendEmails(
            emailList,
            'Food Donation posted!',
            'New Food Donation has been posted.',
            'New Food Donation has been posted.'
        )
    })

});

// 2. When receiver posted a donation request.
exports.requestPosted = functions.firestore
.document('DonationRequest/{docId}')
.onCreate((snap, context) => {


    // fetch email list and send emails
    return fetchEmailList('donor')
    .then( emailList => {

        return sendEmails(
            emailList,
            'Donation request posted!',
            'New Donation Request has been posted.',
            'New Donation Request has been posted'
        )
    })

});

// 3. When user signup then send email to admin.
exports.userSignUp = functions.firestore
.document('Users/{docId}')
.onCreate((snap, context) => {

    // fetch email list and send emails
    return sendEmails(
            [ADMIN_EMAIL],
            'New user sign up',
            'A new user signed up.',
            'A new user signed up.'
        )

});

// 4. When donor accept the donation request
exports.donationRequestAccepted = functions.firestore
.document('DonationRequest/{docId}')
.onUpdate((snap, context) => {

    const {email, acceptedBy} = snap.after.data();

    if(!email || !acceptedBy) return;
    return sendEmails(
        [email],
        'Donation Request Accepted',
        'Your donation request has been accepted.',
        'Your donation request has been accepted.'
    )

});

// 5. When receiver accept the donation
exports.donationAccepted = functions.firestore
.document('Foods/{docId}')
.onUpdate((snap, context) => {

    const {email, acceptedBy} = snap.after.data();

    if(!email || !acceptedBy ) return;
    return sendEmails(
        [email],
        'Donation Accepted',
        'Your posted donation has been accepted by receiver.',
        'Your posted donation has been accepted by receiver.'
    )

});

// Helper functions will be below

// Fetch emails receiver|donor
const fetchEmailList = (type) => {
    
    return firestore.collection('Users')
    .where('type', '==', type)
    .get()
    .then( async userSnap => {

        const emailList = [];

        // If there is no any receiver then return blank list
        if(!userSnap.size) return emailList;
        // Iterate the users documents
        await userSnap.forEach( userDoc => {
            // get the user email
            const email = userDoc.data().email;
            // If email doesn't exist, nothing to do.
            if(!email) return;
            // If email exist, add into the emailist array
            emailList.push(email);

        });

        return emailList;

    })
}

// Send Emails
const sendEmails = (recipients, subject, body, html) => {

    return firestore
    .collection('mail')
    .add({
        to: recipients,
        message: {
            subject,
            body,
            html
        }
    })
}


