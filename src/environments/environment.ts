// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCH3c6BN1nOBit5QZ0EzcNAD1q_9LhBVTU",
    authDomain: "project-wombat.firebaseapp.com",
    databaseURL: "https://project-wombat.firebaseio.com",
    projectId: "project-wombat",
    storageBucket: "project-wombat.appspot.com",
    messagingSenderId: "979735660980"
  }
};
