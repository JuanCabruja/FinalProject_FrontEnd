const PORT = "3009";
const BASE_API_URL = "http://192.168.1.130:" + PORT;

const LOGIN_URL = BASE_API_URL + "/login/";
const USER_URL = BASE_API_URL + "/users/"
const SESSION_URL = BASE_API_URL + '/session/';
const COLLECTION_URL = BASE_API_URL + '/collection/';
const BUYSELL_URL = BASE_API_URL + '/buysell/';
const CATEGORY_URL = BASE_API_URL + '/category/';

export {
    LOGIN_URL,
    USER_URL,
    SESSION_URL,
    COLLECTION_URL,
    BUYSELL_URL,
    CATEGORY_URL
}