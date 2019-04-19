module.exports = {
    "extends": "airbnb",
    "rules": {
        "no-console": ["error", { "allow": ["info", "warn", "error"] }],
        "no-underscore-dangle": "off",
        "react/forbid-prop-types": [1, { "forbid": ["any"] }],
        "class-methods-use-this": 0
    },
    "globals": {
        "document": true,
        "window": true,
        "fetch": true,
        "$": true
    }
};