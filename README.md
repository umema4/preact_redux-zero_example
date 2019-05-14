# preact_redux-zero_example

This is sample of preact, redux-zero and webpack.

# env
NodeJS: 10.15.3
npm: 6.9

# structure
- babel
- webpack
- eslint (base airbnb)
- stylelint
- preact
- redux-zero
- CSS Modules(use CSS-loader)

# run

open /dist/index.html

# dev server

```
npm run watch
```

connect to http://localhost:8080/

# build

```
npm run build
```

# lint

eslint and stylelint is executed before commit.
When your code has lint error, commit is faild.
Please fix the code by manual or 'eslint --fix'.
