("exaMple_passw0rd").match(/(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[a-zA-Z0-9!?_]{8,}/g);

// (?=.*) positive lookahead used for checking rules

// To quantify rules, put them inside another capture group:

("ex4Mp1e_p4ssw0rd").match(/(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){4,})[a-zA-Z0-9!?_]{8,}/g);

// Can also make the quantified rule group non-capturing:

("ex4Mp1e_p4ssw0rd").match(/(?=.*[A-Z])(?=.*[a-z])(?=(?:.*\d){4,})[a-zA-Z0-9!?_]{8,}/g);

