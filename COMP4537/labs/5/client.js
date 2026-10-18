import { ApiClient } from "./classes/ApiClient.js";
import { App } from "./classes/App.js";
import { SAMPLE_ROWS, API_BASE_URL } from "./lang/en/strings.js";

const API_CLIENT = new ApiClient(API_BASE_URL);
const APP = new App(API_CLIENT, SAMPLE_ROWS);
APP.init();