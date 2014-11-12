grunt-typescript-debug
======================

Example project that shows compilation error with grunt-typescript#v0.4.2.


## Setup

```bash
$ npm install
$ grunt --verbose
```


## Example console output showing issue:

The TypeScript compiler is writing each file out multiple times, once for each `--host.getSourceFile` entry:

```bash
$ grunt --verbose
Initializing
Command-line options: --verbose

Reading "Gruntfile.js" Gruntfile...OK

Registering Gruntfile tasks.

Registering "grunt-typescript" local Npm module tasks.
Reading l:\User\projects\WidgetWorks\wiwo-playground\grunt-typescript-debug\node_modules\grunt-typescript\package.json...OK
Parsing l:\User\projects\WidgetWorks\wiwo-playground\grunt-typescript-debug\node_modules\grunt-typescript\package.json...OK
Loading "typescript.js" tasks...OK
+ typescript
Initializing config...OK
Loading "Gruntfile.js" tasks...OK
+ default

No tasks specified, running default tasks.
Running tasks: default

Running "default" task

Running "typescript:dev" (typescript) task
Verifying property typescript.dev exists in config...OK
Files: src/app.ts, src/other-file.ts -> dist
Reading l:\User\projects\WidgetWorks\wiwo-playground\grunt-typescript-debug\node_modules\typescript\bin\tsc.js...OK
Options: basePath="src"
--task.execute
  options: {"dest":"dist","singleFile":false,"basePath":"src/","module":0,"_showNearlyTscCommand":false}
--task.compile
--task.getTargetFiles
  external libs: []
--host.getSourceFile: src/app.ts
  create
--host.getSourceFile: src/other-file.ts
  create
--host.getSourceFile: l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/node_modules/typescript/bin/lib.d.ts
  create
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
6 files created. js: 6 files, map: 0 files, declaration: 0 files (492ms)
```


__Expected output:__

```bash
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
2 files created. js: 2 files, map: 0 files, declaration: 0 files
```

__Actual output:__

```bash
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
--host.writeFile: src/app.js
  write file: src/app.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/app.js
--host.writeFile: src/other-file.js
  write file: src/other-file.js => l:/User/projects/WidgetWorks/wiwo-playground/grunt-typescript-debug/dist/other-file.js
6 files created. js: 6 files, map: 0 files, declaration: 0 files (492ms)
```
