import { ApiClient } from "./classes/ApiClient.js";
import { App } from "./classes/App.js";
import { API_BASE_URL } from "./lang/en/strings.js";

const API_CLIENT = new ApiClient(API_BASE_URL);
const APP = new App(API_CLIENT);
APP.init();