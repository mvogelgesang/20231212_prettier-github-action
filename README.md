# prettier-github-action

Evaluate the Prettier GitHub Action and product a proof of concept to show how it works with a Salesforce project. Original request via, [https://trailhead.salesforce.com/trailblazer-community/feed/0D54V00007Tqgzg](https://trailhead.salesforce.com/trailblazer-community/feed/0D54V00007Tqgzg)

## In Action

The initial commit to the repo included files that lacked Prettier-enforced styling. As a result, commit [`f4b437a`](https://github.com/mvogelgesang/20231212_prettier-github-action/commit/f4b437ae781d1773d436c1e1525d819a79b32ed2) was created via the GitHub action to correct this.

## Implementing Locally

The code provided `prettier.yml` is a starting point to automatically run prettier against a pull request, code push, or on demand. When run, any changes are packaged into a commit that is authored by "My GitHub Actions Bot". 

### Customizing

- Change entries below `on:` to dictate when the rule runs.
- Update the `prettier` command in package.json to only format specified files/ paths.
- The author name, email, etc can be changed in the workflow file to meet project needs.
