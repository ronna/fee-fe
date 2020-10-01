module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
		"plugin:react/recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "vue",
		"react"
    ],
    "rules": {
		"react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error" 
    }
};
