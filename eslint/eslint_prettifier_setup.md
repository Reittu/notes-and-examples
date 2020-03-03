# ESLint setup with prettifier (VSCode)

VSCode extensions: ESLint, Prettier+

settings.json:

```
"prettier.eslintIntegration": true,
"[javascript]": {
  "editor.defaultFormatter": "svipas.prettier-plus"
}
```

CMD:

```
npm init
eslint --init
```

Include style guides: Airbnb 

To exclude some specific rules, edit .eslintrc:

```
"rules": {
  "no-debugger": 0
}
```
