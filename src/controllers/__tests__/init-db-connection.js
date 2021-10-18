import chai from "chai";
import chaiExclude from "chai-exclude";
import { MongoMemoryServer } from "mongodb-memory-server";

import chaiHttp from "chai-http";
import sinonChai from "sinon-chai";

chai.use(chaiExclude);
chai.use(chaiHttp);
chai.use(sinonChai);
const mongoServer = new MongoMemoryServer({ debug: true });

const DefaultTZ = process.env.TZ;
before(async () => {
  process.env.TZ = "UTC";
  await mongoServer.start();
  process.env.DATABASE_CONNECTION_STRING = mongoServer.getUri();

  const { server } = await import("../../server");
  global.app = server;
});

beforeEach(() => {});
