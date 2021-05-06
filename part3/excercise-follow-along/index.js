const express = require("express");
const { request, response } = require("express");
const app = express();

// Middleware
app.use(express.json());
//

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

// Util funcs
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
}; //

// Routes
app.get("/api/notes", (r, rsp) => {
  rsp.json(notes);
});

app.post("/api/notes", (req, rsp) => {
  const body = req.body;

  if (!body.content) {
    return rsp.status(400).json({
      error: "missing content",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };

  notes = notes.concat(note);
  rsp.json(note);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => {
    return note.id === id;
  });

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete("api/notes/:id", (request, response) => {
  id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const note = request.body;
  console.log(note);
  response.json(note);
});

const PORT = 3001;
app.listen(PORT, () => console.log("Server running on port 3001"));
