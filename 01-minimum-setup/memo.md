# step

- add src/server.ts

- add package.json
  これがないと、npm がインストールできない

  - `npm init -y` -on root Dir

- install express 　 in the same place with package.json
  サンプルの node アプリを作るには express が必要

- add Typescript config

  - `tsc --init`

- add code in server.ts
  ```
  import express from "express";
  const PORT = 5000;
  const app = express();
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
  });
  ```
- add ts-node-dev in root Dir
  ts ファイルを直接実行するため/コンパイルなし

  - `npm i -D ts-node-dev nodemon`

- add command to package.json
  - `npm run watch`

```
"watch": "nodemon --exec ts-node-dev src/server.ts"
```

- add endpoint
