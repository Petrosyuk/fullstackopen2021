const mongoose = require("mongoose");

// Constatns
const COLLECTION = "phoneBook";
const URL = ($) =>
  `mongodb+srv://fullstackopen2021:${$.password}@cluster0.kr6t5.mongodb.net/${$.colletionName}?retryWrites=true&w=majority`;

//   Models

// Logic
// No credentials passed
if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node index.js <password>"
  );
  process.exit(1);
}

// Get all reccords if not individual person data is passed.
if (process.argv.length === 3) {
  const password = process.argv[2];
  const connectionString = URL({
    password: password,
    colletionName: COLLECTION,
  });

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    date: Date,
  });

  const Person = mongoose.model("Person", personSchema);

  Person.find({})
    .then((result) => {
      console.log("phonebook:");
      result.forEach((note) => {
        console.log(note.name, note.number);
      });
      mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}

// Add new person reccord if passed as a CLI arg.
if (process.argv.length > 3) {
  console.log("-----------------------------");

  const password = process.argv[2];
  const nameInput = process.argv[3];
  const numberInput = process.argv[4];

  const connectionString = URL({
    password: password,
    colletionName: COLLECTION,
  });

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    date: Date,
  });

  const Person = mongoose.model("Person", personSchema);

  const person = new Person({
    name: nameInput,
    number: numberInput,
    date: new Date(),
  });

  person
    .save()
    .then((rsp) => {
      console.log(rsp);
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
    });
}
