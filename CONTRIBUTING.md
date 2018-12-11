When making changes to this repo, you'll need to increment the package version and publish the new version to NPM in order for other people to be able to update to the new linter rules.
The steps for that are simple:

1. In [package.json](package.json), increment the patch version (the last number in the version) unless you are making major changes, in which case you can increment the major version (the first number).
1. Commit your change and push to master.
1. Run `npm publish` to push the changes to npm and make them available to everyone else.
