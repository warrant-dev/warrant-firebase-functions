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

exports.setUserClaims = functions.auth.user().beforeSignIn(async (user, _) => {
  const warrantClient = new Warrant.Client({
    apiKey: "YOUR_API_KEY",
  });

  let roles = await warrantClient.listRolesForUser(user.uid);
  roles = roles.map((role) => role.roleId);
  user.customClaims["roles"] = roles;

  let permissions = await warrantClient.listPermissionsForUser(user.uid);
  permissions = permissions.map((permission) => permission.permissionId);
  user.customClaims["permissions"] = permissions;

  return {
    customClaims: user.customClaims,
    sessionClaims: user.customClaims,
  };
});
