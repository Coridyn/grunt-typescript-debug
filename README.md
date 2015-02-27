grunt-typescript-debug
======================

> grunt-typescript@0.6.2 - watch src error

Example project that shows watch path error with grunt-typescript@0.6.2.


## Setup

```bash
$ npm install
$ grunt
```


## Description of issue:

The TypeScript compiler is calculating the wrong path to watch when `watch: true` and no `src` is given to watch.

The project has this structure:

```
src
 |
 |- app.ts
 |
 +- nested/
    |
    |- nested-file.ts
    |
    +- deeper/
       |
       +- deeper-file.ts
```

We expect `grunt-typescript` to watch the __src__ directory but instead it will watch __src/nested__.


## Example output:

__Expected output:__

```bash
$ grunt
Running "typescript:dev" (typescript) task

Watching... /path/to/project/grunt-typescript-debug/src
```


__Actual output:__

```bash
$ grunt
Running "typescript:dev" (typescript) task

Watching... /path/to/project/grunt-typescript-debug/src/nested
```


## Error:

The error occurs on [line 118 of option.ts](https://github.com/k-maru/grunt-typescript/blob/rel-0.6.1/src/option.ts#L118) - it won't match directories more than one level away.

i.e.
it will match `../` but not `../..`

NOTE: This might be a Windows-specific bug.


## Fix:

The RegExp can be changed to match multiple directory level changes:

```javascript
match = right.match(/^(\.\.(\/)?)+/);
```

This will will match both `../` and `../..` (and `../../`, and any deeper levels too).

