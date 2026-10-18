/**
 * Assisted with Claude Agent, written by hand
 */
export class ApiClient {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    async insertRows(rows) {
        const response = await fetch(this.apiBaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({rows: rows})
        });
        return this.parse(response);
    }

    async runQuery(sqlStatement) {
        const url = this.apiBaseUrl + "/" + encodeURIComponent(sqlStatement);
        const response = await fetch(url, {
            method: "GET"
        });
        return this.parse(response);
    }

    async parse(response) {
        const data = await response.json();
        return {
            status: response.status,
            data: data
        };
    }
}