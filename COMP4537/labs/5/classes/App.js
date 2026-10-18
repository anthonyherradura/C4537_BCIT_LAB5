import { STRINGS, SAMPLE_ROWS } from "../lang/en/strings.js";

/**
 * Assisted with Claude Agent, written by hand
 */
export class App {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.sampleRows = SAMPLE_ROWS;
        this.insertButton = document.getElementById("insertButton");
        this.queryInput = document.getElementById("queryInput");
        this.queryButton = document.getElementById("queryButton");
        this.output = document.getElementById("serverResponse");
    }

    init() {
        document.title = STRINGS.APP_TITLE;
        document.getElementById("insert-header").textContent = STRINGS.INSERT_HEADER;
        document.getElementById("query-header").textContent = STRINGS.QUERY_HEADER;
        document.getElementById("response-header").textContent = STRINGS.RESPONSE_HEADING;
        this.insertButton.textContent = STRINGS.INSERT_BUTTON;
        this.queryButton.textContent = STRINGS.QUERY_BUTTON;
        this.queryInput.placeholder = STRINGS.QUERY_PLACEHOLDER;

        this.insertButton.addEventListener("click", () => this.onInsert());
        this.queryButton.addEventListener("click", () => this.onQuery());
    }

    async onInsert() {
        await this.send(() => this.apiClient.insertRows(this.sampleRows));
    }

    async onQuery() {
        const sql = this.queryInput.value.trim();
        if (!sql) {
            this.show(STRINGS.EMPTY_QUERY);
            return;
        }
        await this.send(() => this.apiClient.runQuery(sql));
    }

    async send(requestFunction) {
        this.show(STRINGS.SENDING);
        try {
            const result = await requestFunction();
            this.show("HTTP " + result.status + "\n" + JSON.stringify(result.data, null, 2))
        } catch (error) {
            this.show(STRINGS.NETWORK_ERROR + error.message);
        }
    }

    show(text) {
        this.output.textContent = text;
    }
}