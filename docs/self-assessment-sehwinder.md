# LLM Code Self-Assessment - Sehwinder Singh

**Sprint:** Sprint 2, 3–17 September 2026
**Code assessed:** `config/db.js`, `models/postModel.js`, `models/communityModel.js`, `models/mustDoModel.js`, `seed.js`
**Branch:** `backend-models`

I pasted my files into an LLM and asked it to review them like a reviewer would and to point out real problems instead of being nice about it. Here is what it found and what I think about it.

## What I built

The three Mongoose models and the database connection. The validation rules from our API contract live in the schemas and the required fields, the 512-word limit, the category list. A `toJSON` transform turns Mongo's `_id` into `id` so the API returns what the contract promises.

## What I agree with

**`communityId` is a String instead of an ObjectId.** I wrote `communityId: { type: String, default: null }` because the contract says ids are strings. But that is about what the API sends back, not how the database stores it. Because it is a plain string, Mongoose cannot populate it and nothing stops a post pointing at a community that does not exist. It should be `type: mongoose.Schema.Types.ObjectId, ref: "Community"` and let the transform make it a string on the way out.

**`memberCount` does nothing.** It sits on the Community schema and no code ever updates it. The seed just sets 42 and 18 because they look believable.

## What I do not agree with

**"Add indexes on category and communityId."** We have four posts. That is optimising a problem we do not have.

**"`config/db.js` should not call `process.exit(1)`."** If there is no database the server is useless, so failing at startup with a clear message is better.

## What I would do differently

Store communityId as a real reference from the start and checkedOn as a Date instead of a String, same mistake twice, letting the API format decide the database format.

## What I learned

Writing the API contract first is the reason two of us could work for two weeks without getting in each other's way. But a contract describes the edge of the system, not the inside and I let it decide things it should not have. I also improved my soft skills like teamwork and communication skills plus my coding skills developed as well.
