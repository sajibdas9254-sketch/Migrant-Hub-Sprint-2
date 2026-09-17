# Sprint 2 Backlog

**Project:** Migrant Hub
**Sprint 2:** 3 September – 17 September 2026
**Goal:** Build the React frontend and the Express backend separately and agree the API
between them. Do not connect them.

Status recorded at the end of the sprint, 17 September 2026.

---

## First — both teams together

| # | Task | Who | Status |
|---|---|---|---|
| 1 | Agree the API contract: endpoints, methods, request JSON, response JSON, field names and types | All five | Done |
| 2 | Decide that Must Do content comes from the backend, not hardcoded in the frontend | All five | Done |
| 3 | Commit the API contract to the repo so both teams work from the same file | Sajib | Done |

Once this was done, the two teams worked for two weeks without waiting for each other.

---

## Frontend — Sajib, Pratham, Prabhleen

Built in this order. The last two were the ones we agreed to drop if we ran out of time.

| # | Task | Notes | Status |
|---|---|---|---|
| 1 | Set up the React project and folder structure | | Done |
| 2 | Build the navbar and footer as shared components | Used on every page | Done |
| 3 | Set up routing so the navbar links change the page | Unblocked the other two on day one | Done |
| 4 | Homepage | Hero, search box, category chips, post cards | Done |
| 5 | Blog list page | Became a three-column card grid | Done |
| 6 | Single post page | | Done |
| 7 | Write a post form, with the live 512-word counter | A category selector was added — the contract requires it | Done |
| 8 | Must Do overview page | Six cards | Done |
| 9 | Must Do detail page | One component, different content for DVV, police, bank, HSL, Tuudo, housing | Done |
| 10 | Login page | Only shows "Login successful" — no real login | Done |
| 11 | Register page | Only shows "Registration successful" | Done |
| 12 | Mock data file, written in the same shape as the agreed API | `frontend/src/data/` | Done |
| 13 | Community page | Drop this first if we run short | Done — we did not have to drop it |
| 14 | Search results page | Drop this second if we run short | **Not done** — dropped as planned |

---

## Backend — Sehwinder, Yun

Posts first. It is the main thing our product does, and the other two are simpler versions
of the same pattern.

| # | Task | Notes | Status |
|---|---|---|---|
| 1 | Set up the Express server | | Done |
| 2 | Set up the MVC folder structure | models, controllers, routes, middleware | Done |
| 3 | Create mock/array data for posts | Replaced by the database in item 11 | Done |
| 4 | Post model and data structure | | Done |
| 5 | Post controller with create, read, update, delete | | Done |
| 6 | Post routes | | Done |
| 7 | Test post endpoints in Postman | | Done |
| 8 | Must Do items — model, controller, routes | Same pattern as posts; addressed by slug, not id | Done |
| 9 | Communities — model, controller, routes | | Done |
| 10 | Error handling middleware | One unified error shape across every endpoint | Done |
| 11 | Refactor from array data to MongoDB and Mongoose | After it was taught in class, week 4 | Done |
| 12 | Test everything again in Postman after the refactor | Including the 400 and 404 cases | Done |

---

## Process work — everyone

Easy to forget, and it is worth marks.

| # | Task | Who | Status |
|---|---|---|---|
| 1 | Run the Sprint 2 retrospective using the 4Ls format — Liked, Learned, Lacked, Longed for | Whole team | Done |
| 2 | Run the Sprint Review and write down what we finished | Whole team | Done |
| 3 | Each person: LLM self assessment of their frontend code | Everyone | Pending |
| 4 | Each person: LLM self assessment of their backend code | Everyone | Pending |
| 5 | Build the 10–12 minute presentation | Sehwinder | Done |

**Open question for the teacher.** Items 3 and 4 say every member does both. Three of us
worked only on the frontend and two only on the backend, so we need to know whether we assess
only the code we wrote, or whether everyone should commit something on both sides.

---

## Outcome

**Delivered:** 25 of the 26 build tasks. Every frontend page except search results, the full
backend running on MongoDB, and the API contract both halves were built against.

**Not delivered:** the search results page. It was listed at planning as the second thing to
drop if time ran short, and that is what happened. It carries into Sprint 3, where the work is
connecting it rather than designing it — the backend already accepts a `?search=` parameter.

**What went to plan:** the layer split held. The Mongoose refactor in item 11 touched only the
model files and required no changes to the controllers, which is exactly what we predicted when
we chose to split the backend by layer rather than by feature.

**What we did not expect:** building the pages caught three things the prototype had missed —
the category list was wrong, the write-a-post form had no way to set a required field, and
official information needs a "last checked" date. All three came out of writing the API
contract before writing any code.

**What we cannot yet prove:** that the two halves match. They were built to the same contract
but nothing checked it, and we have already found two places where the wording drifted between
the frontend's mock data and the seeded database. That is the first thing Sprint 3 resolves.

---

## Rough plan, and how it actually went

**Week 1 (3–10 September) — as planned.** API contract agreed and committed. Frontend set up
the project, navbar, routing and the first pages. Backend set up the server, MVC structure and
posts with array data, tested in Postman.

**Week 2 (10–17 September) — mostly as planned.** Frontend finished the remaining pages and
forms. Backend added Must Do and communities, then refactored to MongoDB and Mongoose after it
was taught in class. The process documents and the presentation were finished in the last two
days, which is later than ideal — a smaller version of the compression we flagged in the
Sprint 1 retrospective.

---

## Not in this sprint

- Connecting the frontend to the backend
- Real login, passwords, JWT or sessions
- API documentation
- Automated tests
- The AI feature

These are Sprint 3. We did not start them early, even where we had time.
