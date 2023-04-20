export const environment = {
  production: true,

  weatherApiKey: "0f27f166bf554081992111638231704",

  defaultUser: {
    gender: "male",
    name: {
      title: "Mr",
      first: "James",
      last: "Born"
    },
    location: {
      street: {
        number: 1234,
        name: "Main St"
      },
      city: "New York",
      state: "New York",
      country: "United States",
      postcode: "10001",
      coordinates: {
        latitude: "40.748817",
        longitude: "-73.985428"
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada)"
      }
    },
    email: "james.born@example.com",
    login: {
      uuid: "a1234567-89ab-cdef-0123-456789abcdef",
      username: "jamesborn",
      password: "passw0rd",
      salt: "1a2b3c4d",
      md5: "b27c48d7b15fdd1c9397ce3a3a3cc76a",
      sha1: "a9b87c27f48bc7a908a08f3ce6213b18e20c0f2d",
      sha256: "2cf8dbb73d7b381e43c2626167b49f87eeb36e88152a74e954ea9a1e47a39c7d"
    },
    dob: {
      date: "1985-01-15T05:20:23.243Z",
      age: 38
    },
    registered: {
      date: "2010-05-25T18:39:54.268Z",
      age: 11
    },
    phone: "+1 (555) 555-5555",
    cell: "+1 (555) 555-5555",
    id: {
      name: "SSN",
      value: "123-45-6789"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    nat: "US"
  },
  unknownUser: {
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
      large: "https://randomuser.me/api/portraits/lego/1.jpg",
      medium: "https://randomuser.me/api/portraits/lego/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    nat: "unknown",
  }
};