// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use((req, res, next) => {
//   if (req.method === "DELETE" && req.query["_cleanup"]) {
//     const db = router.db;
//     db.set(req.entity, []).write();

//     if (relations[req.entity]) {
//       db.set(relations[req.entity], []).write();
//     }

//     res.sendStatus(204);
//   } else {
//     next();
//   }
// });

// server.use(middlewares);

// server.use(router);

// server.listen(8080, () => {
//     console.log('JSON Server is running')
//   })