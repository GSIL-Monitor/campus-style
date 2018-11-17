const path = require('path');

module.exports ={
  "extends": "@dp/eslint-config-dp",
  "rules": {
    "import/no-unresolved": ["error", {
      "ignore": [
        "components",
        "services",
        "utils",
        "umi"
      ]
    }],
    "no-did-mount-set-state":"off",
    "react/no-did-update-set-state":"off"
  },
  "globals":{
    "__ROOT_API__":true
  },
  "settings": {
    "import/resolver": {
        "webpack": {
            "config": path.resolve(__dirname, "config/webpack.common.js")
        }
    }
}
}
