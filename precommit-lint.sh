#!/bin/bash

echo "ESLint running for staged files..."

# from https://eslint.org/docs/user-guide/integrations#source-control - Git pre-commit hook that only lints staged changes
for file in $(git diff --cached --name-only | grep -E '\.(js|jsx|ts|tsx)$')
do
  git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file" --max-warnings 0 # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint."
    exit 1 # exit with failure status
  fi
done
