# Daily Scrum Log — Sprint 2

**Project:** Migrant Hub — student onboarding and blogging platform
**Sprint 2:** 3 September – 17 September 2026
**Scrum Master:** Sajib Das

One line per daily scrum, recorded on the day. Writing this log was an action we agreed in
the Sprint 1 retrospective, where we noted that we held our daily meetings but left no record
of them.

| Date | Attendance | Progress and work completed | Blockers and next steps | Recorded by |
|---|---|---|---|---|
| **Wed 3 Sep** | All (5) | Refined the product backlog and agreed the Sprint 2 goal. Set the team split: Sajib, Pratham and Prabhleen on the frontend; Sehwinder and Yun on the backend. | Blocked on agreeing the API contract. Next: finalise the endpoints. | All |
| **Tue 8 Sep** | All (5) | Agreed the API contract — port 4000, JSON structure, 204 on DELETE. Prabhleen initialised the Vite React project; Yun initialised the Express server and MVC folders. | Frontend waiting on the layout shell. Next: shared navbar, and the post model. | All |
| **Wed 9 Sep** | All (5) | Attended the MongoDB and Mongoose class. Sehwinder set up the MongoDB Atlas connection and designed the initial array models for Post, Community and MustDo. Prabhleen built the shared navbar and footer and the React Router links. | Sehwinder moving on to Mongoose schemas. Next: array-based controllers and the core page views. | Sehwinder, Prabhleen |
| **Thu 10 Sep** | All (5) | Yun completed the array-based Express REST endpoints for posts and tested the routes in Postman. Pratham created the reusable post card component and the mock post data. | Sehwinder preparing the seed data. Next: Must Do overview and detail page structure. | Yun, Pratham |
| **Fri 11 Sep** | All (5) | Sajib created `mustDoData.js` with corrected links for the Finnish police and S-Pankki. Built the reusable `MustDoPage.jsx` component handling all six checklist items through state and props. | Input validation middleware still needed. Next: auth and community page placeholders. | Sajib |
| **Sat 12 Sep** | All (5) | Pratham completed the write-a-post controlled form with the live 512-word counter. Sajib created the login and register forms with a success message state. | Backend middleware refactoring in progress. Next: error handling and community endpoints. | Pratham, Sajib |
| **Sun 13 Sep** | All (5) | Yun implemented request validation (`validatePost.js`) and the JSON error handling middleware (`errorHandler.js`). Sajib added the community page with a `useState` toggle for joining. | Preparing for the Mongoose refactor. Next: swap the array models for Mongoose schemas. | Yun, Sajib |
| **Mon 14 Sep** | All (5) | Sehwinder refactored the data models from arrays to Mongoose without altering the controller signatures. Created the database seeding script `seed.js`. | Endpoints need re-testing. Next: full Postman pass against the database. | Sehwinder |
| **Tue 15 Sep** | All (5) | Yun ran the full Postman collection against MongoDB and captured the passing responses, including the 400 and 404 cases. Sajib verified that every React route renders cleanly in `App.jsx`. | Feature freeze in effect. Next: process documentation and presentation preparation. | Yun, Sajib |
| **Wed 16 Sep** | All (5) | Code freeze. Ran the team 4Ls retrospective and finalised the presentation slides. | Rehearsal timing check outstanding. Next: presentation and OMA submission on 17 September. | All |
| **Thu 17 Sep** | All (5) | Delivered the Sprint 2 presentation. Completed the prototype alignment check, the Scrum process document and the backlog refinement. Individual LLM self-assessments in progress. | Postman collection export outstanding. Next: push all deliverables and submit the repository link to OMA. | All |
