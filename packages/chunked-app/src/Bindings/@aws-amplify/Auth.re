// Import Auth.default as type auth
type auth;
[@bs.module "@aws-amplify/auth"] external auth: auth = "default";

// Build a function that will call the `configure` method of an object passed
// as the first argument.
type configure;
[@bs.send] external configure: (auth, config) => configure = "configure";
let configure = config => configure(auth, config);

[@bs.send]
external getCurrentSession: (auth, unit) => Js.Promise.t('a) =
  "currentSession";

[@bs.send]
external getCurrentSession: (auth, unit) => Js.Promise.t('a) =
  "currentSession";

type user;
type oldPassword;
type newPassword;
[@bs.send]
external changePassword:
  (auth, user, oldPassword, newPassword) => Js.Promise.t('a) =
  "changePassword";
