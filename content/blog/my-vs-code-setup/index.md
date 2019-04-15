# My VS Code setup

This is a concise list of my favourite VS Code extensions and settings.

## Background
I am a huge fan of VS code. I previously coded on Sublime Text, then moved to Code after a job change. The transistion has been smooth and I am not looking back!
## Extensions
### Syntax highlighting
#### [Babel Javascript](https://marketplace.visualstudio.com/itemdetails?itemName=mgmcdermott.vscode-language-babel) and  [Styled Components](https://marketplace.visualstudio.com/itemdetails?itemName=jpoissonnier.vscode-styled-components)

I don't think I need to introduce these two ;)
> JavaScript syntax highlighting for ES201x, React JSX, Flow and GraphQL.
> Syntax highlighting and IntelliSense for styled-components.

### Code formatting
#### [ESlint](https://marketplace.visualstudio.com/itemdetails?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/itemdetails?itemName=esbenp.prettier-vscode)

I haver both these plugins set up in such a way that linting errors are highlighted according to the current project's config.

#### [Trailing spaces](https://marketplace.visualstudio.com/itemdetails?itemName=shardulm94.trailing-spaces)

 > Highlight trailing spaces and delete them in a flash!

I brought this with me from Sublime.

#### [Rainbow brackets](https://marketplace.visualstudio.com/itemdetails?itemName=2gua.rainbow-brackets)

I believe I discovered this gem while exploring _best vs code plugins_ in the search engine. I find this one immensely helpful overall in my JS code.

Currently I work with a React/Redux application with actions written this way:
```javascript
export function sendRequestWithReload(id) {
  return (dispatch, getState, api) => {
    dispatch({ type: LOADING });
    return api.sendData(id).then(() => {
      dispatch(getRefreshedData(id));
      dispatch({ type: LOADED });
    });
  };
}
```
With this plugin each pair of brackets has its own color. Finding a bracket that is not closed has never been so easy!

_... and for the purpose of this blog:_
#### [Markdown Preview Enhanced](https://marketplace.visualstudio.com/itemdetails?itemName=shd101wyy.markdown-preview-enhanced)

Recommended by a colleague. So convenient, because of its live reload.

## Settings

### View the whole path of the current file

This one is especially useful to me when familiarizing myself with a new project. At that moment I don't know my way around it just yet and the path helps me navigate.

```
{
    "window.title": "${activeEditorLong}${separator}${rootName}",
}
```

### View all whitespace

There were times when indentation alone was not enough for me to spot an extra white space character. Its use seems obsolete with prettier right now, but I cannot imagine having it any other way.

```
{
    "editor.renderWhitespace": "all","files.insertFinalNewline": true,
}
```


### Quick-open to edit files

Open the file in a new tab with quick-open (e.g. `cmd + p`) instead of viewing it with [preview mode](https://code.visualstudio.com/docs/getstarted/userinterface#_preview-mode).
```
{
    "workbench.editor.enablePreviewFromQuickOpen": false,
}
```

### Format files

_Format on save_ is a life saver. One of my favourite options, here together with the project's `prettier` config. Trimming trailing whitespace on save and adding that last empty line is a cherry on top.

```
{
    "prettier.requireConfig": true,
    "editor.formatOnSave": true,
    "trailing-spaces.trimOnSave": true,
    "files.insertFinalNewline": true,
}
```
