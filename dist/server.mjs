 
        import {createRequire} from 'module';
        const require = createRequire(import.meta.url)
        

// src/app.ts
import express from "express";

// src/lib/prisma.ts
import { PrismaPg } from "@prisma/adapter-pg";

// prisma/generated/prisma/client.ts
import "process";
import * as path from "path";
import { fileURLToPath } from "url";
import "@prisma/client/runtime/client";

// prisma/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.9.1",
  "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
  "activeProvider": "postgresql",
  "inlineSchema": 'model Car {\n  id    Int    @id @default(autoincrement())\n  name  String\n  model String\n  year  Int\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Car":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"model","kind":"scalar","type":"String"},{"name":"year","kind":"scalar","type":"Int"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","Car.findUnique","Car.findUniqueOrThrow","orderBy","cursor","Car.findFirst","Car.findFirstOrThrow","Car.findMany","data","Car.createOne","Car.createMany","Car.createManyAndReturn","Car.updateOne","Car.updateMany","Car.updateManyAndReturn","create","update","Car.upsertOne","Car.deleteOne","Car.deleteMany","having","_count","_avg","_sum","_min","_max","Car.groupBy","Car.aggregate","AND","OR","NOT","id","name","model","year","equals","in","notIn","lt","lte","gt","gte","contains","startsWith","endsWith","not","set","increment","decrement","multiply","divide"]'),
  graph: "KwsQBxwAACIAMB0AAAQAEB4AACIAMB8CAAAAASABACQAISEBACQAISICACMAIQEAAAABACABAAAAAQAgBxwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAISICACMAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAEHwIAAAABIAEAAAABIQEAAAABIgIAAAABAQgAAAkAIAQfAgAAAAEgAQAAAAEhAQAAAAEiAgAAAAEBCAAACwAwAQgAAAsAMAQfAgArACEgAQAqACEhAQAqACEiAgArACECAAAAAQAgCAAADgAgBB8CACsAISABACoAISEBACoAISICACsAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACUAIBYAACYAIBcAACkAIBgAACgAIBkAACcAIAccAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAgAbACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAccAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAgAbACENFQAAHgAgFgAAIQAgFwAAHgAgGAAAHgAgGQAAHgAgIwIAAAABJAIAAAAEJQIAAAAEJgIAAAABJwIAAAABKAIAAAABKQIAAAABLQIAIAAhDhUAAB4AIBgAAB8AIBkAAB8AICMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAAAAAS0BAB0AIQ4VAAAeACAYAAAfACAZAAAfACAjAQAAAAEkAQAAAAQlAQAAAAQmAQAAAAEnAQAAAAEoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAAAAEtAQAdACEIIwIAAAABJAIAAAAEJQIAAAAEJgIAAAABJwIAAAABKAIAAAABKQIAAAABLQIAHgAhCyMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAAAAAS0BAB8AIQ0VAAAeACAWAAAhACAXAAAeACAYAAAeACAZAAAeACAjAgAAAAEkAgAAAAQlAgAAAAQmAgAAAAEnAgAAAAEoAgAAAAEpAgAAAAEtAgAgACEIIwgAAAABJAgAAAAEJQgAAAAEJggAAAABJwgAAAABKAgAAAABKQgAAAABLQgAIQAhBxwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAISICACMAIQgjAgAAAAEkAgAAAAQlAgAAAAQmAgAAAAEnAgAAAAEoAgAAAAEpAgAAAAEtAgAeACELIwEAAAABJAEAAAAEJQEAAAAEJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAAAABLQEAHwAhAAAAAAABLgEAAAABBS4CAAAAAS8CAAAAATACAAAAATECAAAAATICAAAAAQAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKAQIBAgMBBQYBBgcBBwgBCQoBCgwCCw0DDA8BDRECDhIEERMBEhQBExUCGhgFGxkL"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// prisma/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// prisma/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
var prisma = new PrismaClient({ adapter });

// src/app.ts
var app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json("Server is runninggg");
});
var app_default = app;

// src/config/index.ts
import { configDotenv } from "dotenv";
import { env } from "process";
configDotenv();
var config2 = {
  NODE_ENV: "env.NODE_ENV",
  PORT: env.PORT,
  DATABASE_URL: env.DATABASE_URL
};
var config_default = config2;

// src/server.ts
if (config_default.NODE_ENV !== "production") {
  app_default.listen(3e3, () => {
    console.log("Server is running on http://localhost:3000");
  });
}
var server_default = app_default;
export {
  server_default as default
};
