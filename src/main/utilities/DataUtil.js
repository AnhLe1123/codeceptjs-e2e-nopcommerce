
module.exports = {
    getFirstName() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let randString = '';
        for (let i = 0; i < 8; i++) {
            randString += chars[Math.floor(Math.random() * chars.length)];
        }
        return randString;
    },

    getLastName() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let randString = '';
        for (let i = 0; i < 8; i++) {
            randString += chars[Math.floor(Math.random() * chars.length)];
        }
        return randString;
    },

    getEmailAddress() {
        let randNum = Math.floor(Math.random() * 10000);
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let randString = '';
        for (let i = 0; i < 12; i++) {
            randString += chars[Math.floor(Math.random() * chars.length)];
        }
        return randString + randNum + '@mail.com';
    },

    getPassword() {
        return Math.floor(Math.random() * 100000000);
    },

    getPhoneNumber() {
        return '0' + Math.floor(Math.random() * 1000000000);
    },

}