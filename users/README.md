# Sync Auth with Warrant

These functions demonstrate how to sync your Firebase users with Warrant users and access rules.

## Functions

### `createWarrantUser`

This function automatically creates a user in Warrant whenever a new user is created in your Firebase project.

### `deleteWarrantUser`

This function automatically deletes a user in Warrant whenever a user is deleted in your Firebase project.

### `setUserClaims`

This function sets a user's claims to include their assigned roles and permissions in Warrant when a user logs in to your Firebase project.


## Deploy and Test

- Use `firebase use --add` to select your desired Firebase project as the current project.
- Deploy the functions using `firebase deploy --only functions`
- Trigger the corresponding functions by creating a user, deleting a user, or logging in a user.
