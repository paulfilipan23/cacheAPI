import { Schema, model } from "mongoose";

const cacheSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    min: 6,
  },
  data: {
    type: String,
    max: 255,
    min: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

// I was thinking that this could be a better option, in order to not have a lot of thngs in repo, but writting logs in schemas is ... not the best
// but it can be an aproach if there is no logging

// cacheSchema.static(
//   "findOneOrCreate",
//   async function findOneOrCreate(condition, doc) {
//     const one = await this.findOne(condition);
//     if (one) {
//       logger.log("info", `Cache hit`);
//       return one;
//     }
//     logger.log("info", `Cache miss`);
//     return this.create(doc);
//   }
// );

export default model("Cache", cacheSchema);
