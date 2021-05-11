module.exports = {
    "env": {
        "jest/globals": true
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
        "jest",
        "react-hooks"
    ],
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    },
    "extends": [
        "airbnb-typescript",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",

    ],
    "rules": {
        "eslint-comments/no-unlimited-disable": "off",
        "eslint-comments/no-unused-disable": "off",
        "global-require": "off",
        "import/no-namespace": "off",
        "import/prefer-default-export": "off",
        "import/order": "error",
        "import/no-cycle": "off",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ],
        "class-methods-use-this": "off",
        "require-atomic-updates": "off",
        "no-useless-constructor": "off",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslintno-unused-vars": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/state-in-constructor": "off",
        "react/prefer-stateless-function": "error",
        "react/static-property-placement": "off",
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "react-hooks/exhaustive-deps": "off",
        "react/no-array-index-key": "warn"
    }
}