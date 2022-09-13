const functions = require("firebase-functions");
const Warrant = require("@warrantdev/warrant-node");

exports.createWarrantUser = functions.auth.user().onCreate((user) => {
  const warrantClient = new Warrant.Client({
    apiKey: "YOUR_API_KEY",
  });

  warrantClient
      .createUser({userId: user.uid, email: user.email})
      .then((newUser) => console.log(newUser))
      .catch((error) => console.log(error));
});

exports.deleteWarrantUser = functions.auth.user().onDelete((user) => {
  const warrantClient = new Warrant.Client({
    apiKey: "YOUR_API_KEY",
  });

  warrantClient
      .deleteUser(user.uid)
      .catch((error) => console.log(error));
});
