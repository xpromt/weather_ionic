// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  defaultUser: {
    gender: "unknown",
    name: {
      title: "unknown",
      first: "unknown",
      last: "unknown",
    },
    location: {
      street: {
        number: 0,
        name: "unknown",
      },
      city: "unknown",
      state: "unknown",
      country: "unknown",
      postcode: "unknown",
      coordinates: {
        latitude: "unknown",
        longitude: "unknown",
      },
      timezone: {
        offset: "unknown",
        description: "unknown",
      },
    },
    email: "unknown",
    login: {
      uuid: "unknown",
      username: "unknown",
      password: "unknown",
      salt: "unknown",
      md5: "unknown",
      sha1: "unknown",
      sha256: "unknown",
    },
    dob: {
      date: "unknown",
      age: 0,
    },
    registered: {
      date: "unknown",
      age: 0,
    },
    phone: "unknown",
    cell: "unknown",
    id: {
      name: "unknown",
      value: "unknown",
    },
    picture: {
      large: "unknown",
      medium: "unknown",
      thumbnail: "unknown",
    },
    nat: "unknown",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
