const functions = require("firebase-functions");
const Warrant = require("@warrantdev/warrant-node");

exports.createWarrantUser = functions.auth.user().onCreate((user) => {
  const warrantClient = new Warrant.Client({
    apiKey: "api_test_sFKH7-x-7lwtXeHwX_OkvhArmBdD4iKBDFwZftbUd74=",
  });

  warrantClient
      .createUser({userId: user.uid, email: user.email})
      .then((newUser) => console.log(newUser))
      .catch((error) => console.log(error));
});

exports.deleteWarrantUser = functions.auth.user().onDelete((user) => {
  const warrantClient = new Warrant.Client({
    apiKey: "api_test_sFKH7-x-7lwtXeHwX_OkvhArmBdD4iKBDFwZftbUd74=",
  });

  warrantClient
      .deleteUser(user.uid)
      .catch((error) => console.log(error));
});
