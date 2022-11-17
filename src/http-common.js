// APPID created using
/* Generating app-id for  curl -X POST -d 'name=Amare'
https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/
And was found to be SSn5lljqiXcoSQyQzIb4 */

const APP_ID = 'SSn5lljqiXcoSQyQzIb4';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const FETCH_BOOK_URL = `${BASE_URL}/${APP_ID}/books`;

export default FETCH_BOOK_URL;
