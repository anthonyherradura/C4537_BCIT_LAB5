const STRINGS = {
    INSERT_HEADER: "Insert sample patients.",
    INSERT_BUTTON: "Insert",
    QUERY_HEADER: "Run a SELECT query.",
    QUERY_PLACEHOLDER: "select * from patient",
    QUERY_BUTTON: "Submit",
    RESPONSE_HEADING: "Server response",
    SENDING: "Sending request...",
    EMPTY_QUERY: "Please type a SQL query first.",
    NETWORK_ERROR: "Could not reach the server: "
};

const SAMPLE_ROWS = [
    { name: "Sara Brown", dateOfBirth: "1901-01-01 00:00:00" },
    { name: "John Smith", dateOfBirth: "1941-01-01 00:00:00" },
    { name: "Jack Ma", dateOfBirth: "1961-01-30 00:00:00" },
    { name: "Elon Musk", dateOfBirth: "1999-01-01 00:00:00" }
];

const API_BASE_URL = "https://your-server2-domain.xyz/lab5/api/v1/sql";