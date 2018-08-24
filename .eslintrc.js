module.exports = {
  root: true,
  "parser": "babel-eslint",
  "env": {
  	// El código es para un browser
  	"browser": true,
  	// En CommonJS
  	"node": true,
  	// Jquery global
  	"jquery": true,
  	// ES6
  	"es6": true,
  },
  "rules": {
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }]
  },
  "plugins": [
  	"react"
  ],
  "parserOptions": {
  	"ecmaFeatures": {
  		"jsx": true
  	}
  }
}