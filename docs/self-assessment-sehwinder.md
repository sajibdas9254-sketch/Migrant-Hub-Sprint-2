# LLM Code Self-Assessment — Sehwinder Singh

**Sprint:** Sprint 2, 3–17 September 2026
**Code assessed:** the backend data layer — `config/db.js`, `models/postModel.js`,
`models/communityModel.js`, `models/mustDoModel.js`, `seed.js`
**Branch:** `backend-models`
**Method:** I pasted each file into an LLM and asked it to review the code as a backend
reviewer would, name concrete problems rather than praise, and say what it would change and
why. I then went through its findings and decided which I accept, which I reject, and what I
would actually do about each.

---

## What I built

Three Mongoose schemas and the database layer behind them. The design decision that shaped
everything else was made at sprint planning: we split the backend by layer rather than by
feature, so I own the models and the database and Yun owns the server, routes and
controllers. The test of that split was the Mongoose refactor in week four — it should touch
only my files. It did.

The rules from our API contract live inside the schemas: required fields, a 512-word limit on
the post body, the seven allowed categories as an enum, and unique slugs on Must Do items. A
`toJSON` transform converts Mongo's `_id` into the `id` field the contract promises, so the
API returns the agreed shape regardless of how the data is stored.

---

## Findings I accept

**`communityId` is stored as a String, not an ObjectId reference.**
This is the most substantial thing the review found, and it is right. I wrote:

```js
communityId: { type: String, default: null }
```

Because our API contract says every id is a string, I stored the string. The consequence is
that Mongoose does not know this field points at a Community, so `.populate()` does not work
and nothing stops a post from referencing a community that does not exist. The correct version
is:

```js
communityId: { type: mongoose.Schema.Types.ObjectId, ref: "Community", default: null }
```

and let the `toJSON` transform turn it into a string on the way out — which is where the
contract's requirement actually belongs. I had confused "the API returns a string" with "the
database stores a string". Sprint 3 work.

**A duplicate model file was committed.**
`models/comunityModel.js` — one "m" — was created by mistake, and although I created
`communityModel.js` correctly and nothing imports the typo file, the broken one is still in
the repository. Dead code that is never imported is worse than no code, because the next
person has to work out which one is real. It should be deleted.

**The word counter counts tokens, not words.**

```js
validator: (text) => text.trim().split(/\s+/).length <= 512
```

Splitting on whitespace means "post-graduate" counts as one word and a string of punctuation
counts as one. For our purpose — stopping people writing essays — it is good enough, and I
would keep it rather than pull in a dependency. But it is an approximation and I should not
pretend otherwise.

**`memberCount` is decorative.**
It is a field on the Community schema with a default of 0, and nothing ever changes it. The
seed data sets it to 42 and 18 because those numbers look plausible on a page. Storing a
number that no code maintains is how data goes stale. Either joining a community should
increment it, or it should be derived rather than stored.

**`seed.js` deletes three collections with no confirmation.**
It calls `deleteMany({})` on posts, communities and Must Do items before inserting. That is
correct behaviour for a seed script and it is why running it twice is safe. But it reads its
target from `MONGO_URI`, so if that variable ever pointed at something that mattered, the
script would empty it without asking. For a coursework database this is fine; I would not
ship it as-is anywhere real.

---

## Findings I do not accept

**"Add indexes on `category` and `communityId`."**
Technically correct and practically pointless here. We have four posts. An index would make no
measurable difference and would be optimisation written for an imagined problem. The unique
constraints on `slug` and community `name` already create indexes, and those exist for
correctness rather than speed. I would add query indexes when there is a query that is slow,
not before.

**"`config/db.js` should not call `process.exit(1)`."**
The review argued the connection function should throw and let the caller decide. In a larger
application I would agree. In ours, a server running without a database is useless — every
endpoint would fail at the first request with a confusing error instead of a clear one at
startup. Failing loudly and immediately is the right behaviour for this program, and I would
keep it.

**"Add JSDoc comments to every schema field."**
The fields are `title`, `author`, `documents`, `checkedOn`. A comment saying "the title of the
post" above `title` is noise. Where a field genuinely needed explaining — `checkedOn` exists
because official information goes stale — that reasoning belongs in the API contract, which is
where I put it.

---

## What I would change if I had the sprint again

Store `communityId` as a real ObjectId reference from the start. I made the wrong call for a
defensible reason, and it will cost an hour in Sprint 3 to undo.

Store `checkedOn` as a `Date` rather than a `String`. The contract specifies an ISO date
string in the JSON, which is what led me to store a string, and it is the same mistake as
`communityId` in a different place — confusing the wire format with the storage format. As a
string I cannot query "everything not checked in the last six months", which is exactly the
question that field exists to answer.

Delete the typo file the day I noticed it, rather than leaving it for the tidy-up.

---

## What I learned

The thing worth keeping is not a technique but a habit: writing the API contract before any
code meant two of us could work in parallel for two weeks without colliding. It also caught
mistakes the design had missed — the category list was wrong, and the write-a-post form had no
way to set a field the contract makes required.

The thing worth watching is that a contract describes the boundary, not the inside. Twice I
let a rule about what the API returns dictate how the database stores data, and both times
that was wrong. The transform layer exists precisely so those two things can differ.
