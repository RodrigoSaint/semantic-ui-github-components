## semantic-ui-wordpress-components

This is a component that by just passing a username can query its repositories and display them.

To install you can add it to your dependencies along with [semantic-ui-react](https://react.semantic-ui.com/introduction):

> npm i semantic-ui-github-components semantic-ui-react --save
 
or
> yarn add semantic-ui-github-components semantic-ui-react

Then import it on the component that you will use it:

```javascript
import GitHubRepositories from  "semantic-ui-github-components";
```
And after that pass the address of your wordpress on the address prop:
```javascript
const app = () => <GitHubRepositories username="rodrigosaint"  />
```
Done, you should have something like this:

![Example](https://i.imgur.com/WavuFck.png)