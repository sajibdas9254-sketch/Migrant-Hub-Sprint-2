# Product Backlog

**Project:** Migrant Hub — student onboarding and blogging platform
**Last refined:** 17 September 2026 (end of Sprint 2)
**Previous refinement:** 3 September 2026 (end of Sprint 1)

Ordered by value and dependency — item 1 is the highest priority. Items near the top are
refined and estimated; items near the bottom are deliberately left rough, because we may
not build them for several sprints.

---

## Ordered backlog

**A note on the Status column.** Sprint 2 built the frontend and the backend separately and
deliberately did not connect them. So for most stories both halves exist but the story is not
yet delivered to a user — the page runs on mock data and the endpoint runs on real data, and
they meet in Sprint 3. We record that honestly rather than marking these stories done.

| # | User story | Epic | Points | Status |
|---|---|---|---|---|
| 1 | As an arriving student, I want a checklist of what to do after landing, so that I do not miss an official step. | Must Do | 3 | Both halves built |
| 2 | As an arriving student, I want a DVV registration page with the documents and an official link, so that I know what to bring. | Must Do | 2 | Both halves built |
| 3 | As an arriving student, I want a police and residence permit page, so that I can complete my identity verification. | Must Do | 2 | Both halves built |
| 4 | As an arriving student, I want a bank account page, so that I know which documents I need to open one. | Must Do | 2 | Both halves built |
| 5 | As a new student, I want an HSL travel card page, so that I can use public transport from day one. | Must Do | 2 | Both halves built |
| 6 | As a student, I want a Tuudo page, so that I can access student services. | Must Do | 2 | Both halves built |
| 7 | As an arriving student, I want housing guidance with HOAS and other links, so that I can find accommodation. | Must Do | 2 | Both halves built |
| 8 | As a visitor, I want to read a blog post, so that I can learn from students who arrived before me. | Blog | 2 | Both halves built |
| 9 | As a visitor, I want to register and log in, so that I can write posts under my own name. | Auth | 5 | Pages built, no real auth |
| 10 | As a student, I want to write a post of up to 512 words with a live word counter, so that I can share advice concisely. | Blog | 5 | Both halves built |
| 11 | As a visitor, I want to browse and search posts by category, so that I can find answers to my question. | Blog | 3 | Browsing built, search deferred |
| 12 | As a newcomer, I want to join a community, so that I can follow posts from people in my situation. | Community | 8 | Page and API built, joining not wired |
| 13 | As a student, I want an overview, tags and a category generated when I publish, so that others can find my post. | AI | 8 | Not started — Sprint 3 |
| 14 | As an admin, I want to review and remove posts, so that the platform stays useful and safe. | Admin | 5 | Not started |

## Added during Sprint 2

Items that did not exist at Sprint 1 planning and emerged from building the product.

| # | Item | Epic | Points | Why it appeared |
|---|---|---|---|---|
| 15 | As a visitor on a phone, I want every page to be readable and usable, so that I can use the site away from a laptop. | Frontend | 3 | Most of our users will arrive on a phone; the prototype was designed at desktop width only. |
| 16 | Connect the frontend to the API: replace the mock data files with real requests. | Technical | 5 | The whole point of the Sprint 2 contract. This is the first task of Sprint 3 and it is what proves the contract held. |
| 17 | Reconcile the frontend's mock copy with the seeded database content. | Technical | 2 | Our prototype-alignment check found the DVV page wording and a community name differ between the two halves. |

## Future items — deliberately unrefined

These are recorded so they are not lost, but they are not estimated and not planned for a
specific sprint.

- Community chat, so members can ask quick questions.
- Community events, so members can meet people in person.
- Post images. `imageUrl` exists as a field in the API contract and in the database, but
  nothing uploads or displays an image yet.

## Removed

- **Restaurant listing.** Cut during the Sprint 1 review: Google Maps already does this
  better than we could. Students writing about food experiences stays in scope as blog
  content; a directory of restaurants does not.
- **Housing booking.** We cannot integrate with HOAS, so housing is a guide with official
  links (item 7), not a booking feature.

## How this backlog is ordered

Value and dependency, in that order:

- **Must Do first** because it is cheap to build, it is the reason a new student opens the
  site at all, and it is what makes us more than a blogging platform.
- **Reading before writing**, because a platform with no posts to read has nothing to offer
  a first-time visitor.
- **Communities and AI last**, because both depend on posts existing first.

## Notes on refinement

**Sprint 2 refinement (17 September 2026)**

- Added a Status column, so the backlog records what Sprint 2 actually delivered rather than
  only what we intend to build.
- Added items 15–17, which emerged during the sprint.
- **Places** moved out of "Future items". It is no longer a future idea — it is one of the
  seven live categories in the API contract, in the homepage chips and in the database. It was
  added after the Sprint 1 AI spike, which found that a post about visiting somewhere in
  Helsinki had no category to sit in.
- Added post images to Future items. The field exists in the contract; the feature does not.
- Item 11 split in practice: browsing by category is built, the search results page was
  deliberately dropped when we ran short of time and carries into Sprint 3.

**Sprint 1 refinement (3 September 2026)**

- Split the original "Must to do" card into five separate stories (items 2–6). As one card
  it could not be estimated and there was no way to say when it was done.
- Added the AI stories, which were missing from the board entirely despite AI being the
  central feature of the product.
- Removed duplicate cards and rewrote titles into user story form.
- Estimated using relative sizing, anchored on "read a blog post" as 2 points.
- Added acceptance criteria to the top items.
