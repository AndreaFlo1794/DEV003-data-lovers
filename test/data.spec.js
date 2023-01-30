import { orderingBy, filteringBy, calculatePercent } from '../src/data.js';

// Copia reducida

const filmsReduced = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
  },
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "release_date": "2013",
    "rt_score": "100",
  },
  {
    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "release_date": "2014",
    "rt_score": "92",
  },
]

// copia Score ordenada "desc"

const scoreOrderDesc = [
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "release_date": "2013",
    "rt_score": "100",
  },
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "release_date": "2014",
    "rt_score": "92",
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
  },
]

// copia Score ordenada "desc"

const scoreOrderAsc = [
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
  },
  {
    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "release_date": "2014",
    "rt_score": "92",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "release_date": "2013",
    "rt_score": "100",
  },
]

// copia Release ordenada "desc"

const releaseOrderAsc = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
  },
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "release_date": "2013",
    "rt_score": "100",
  },
  {
    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "release_date": "2014",
    "rt_score": "92",
  },
]

// copia Release ordenada "desc"

const releaseOrderDesc = [
  {
    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "title": "When Marnie Was There",
    "release_date": "2014",
    "rt_score": "92",
  },
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "release_date": "2013",
    "rt_score": "100",
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95",
  },
]

//data de people(gender)

const peopleGender = [
  {
    "id": "4a6a60d1-cb07-464f-889c-fecaff19b4ef",
    "name": "Marnie",
    "gender": "Female",
  },
  {
    "id": "08fdd37a-2cf0-4f91-ae1c-344ecff39753",
    "name": "Kazuhiko",
    "gender": "Male",
  },
  {
    "id": "66bca178-9920-4ec3-91e9-0d5b8a76dba1",
    "name": "Setsu Oiwa",
    "gender": "Female",
  },
  {
    "id": "c827feae-8ccf-4ced-84cb-bc3e226b1cd1",
    "name": "Yoriko Sasaki",
    "gender": "Female",
  },
  {
    "id": "31b49ef6-ee60-4603-b983-e67fa0718aa9",
    "name": "Kiyomasa Ōiwa",
    "gender": "Male",
  },
]

const peopleFemale = [
  {
    "id": "4a6a60d1-cb07-464f-889c-fecaff19b4ef",
    "name": "Marnie",
    "gender": "Female",
  },
  {
    "id": "66bca178-9920-4ec3-91e9-0d5b8a76dba1",
    "name": "Setsu Oiwa",
    "gender": "Female",
  },
  {
    "id": "c827feae-8ccf-4ced-84cb-bc3e226b1cd1",
    "name": "Yoriko Sasaki",
    "gender": "Female",
  },

]

const peopleMale = [
  {
    "id": "08fdd37a-2cf0-4f91-ae1c-344ecff39753",
    "name": "Kazuhiko",
    "gender": "Male",
  },
  {
    "id": "31b49ef6-ee60-4603-b983-e67fa0718aa9",
    "name": "Kiyomasa Ōiwa",
    "gender": "Male",
  },

]

// test función orderingBy
describe('orderingBy', () => {
  it('is a function', () => {
    expect(typeof orderingBy).toEqual('function');
  });
});

it("returns 'orderingBy'", () => {
  expect(orderingBy(filmsReduced, "rt_score", "desc")).toEqual(scoreOrderDesc);
});

describe('orderingBy', () => {
  it('is a function', () => {
    expect(typeof orderingBy).toEqual('function');
  });
});

it("returns 'orderingBy'", () => {
  expect(orderingBy(filmsReduced, "rt_score", "asc")).toEqual(scoreOrderAsc);
});


describe('orderingBy', () => {
  it('is a function', () => {
    expect(typeof orderingBy).toEqual('function');
  });
});

it("returns 'orderingBy'", () => {
  expect(orderingBy(filmsReduced, "release_date", "desc")).toEqual(releaseOrderDesc);
});

describe('orderingBy', () => {
  it('is a function', () => {
    expect(typeof orderingBy).toEqual('function');
  });
});

it("returns 'orderingBy'", () => {
  expect(orderingBy(filmsReduced, "release_date", "asc")).toEqual(releaseOrderAsc);
});

// test función orderingBy
describe("filteringBy", () => {
  it("is a function", () => {
    expect(typeof filteringBy).toEqual("function");
  });

  it("returns 'filteringBy'", () => {
    expect((filteringBy(peopleGender, "gender", "Female"))).toEqual(peopleFemale);
  });
});

describe("filteringBy", () => {
  it("is a function", () => {
    expect(typeof filteringBy).toEqual("function");
  });

  it("returns 'filteringBy'", () => {
    expect((filteringBy(peopleGender, "gender", "Male"))).toEqual(peopleMale);
  });
});

// test función orderingBy
describe("calculatePercent", () => {
  it("is a function", () => {
    expect(typeof calculatePercent).toEqual("function");
  });

  it("returns 'calculatePercent'", () => {
    expect((calculatePercent(171, 81))).toEqual(47);
  });
});
describe("calculatePercent", () => {
  it("is a function", () => {
    expect(typeof calculatePercent).toEqual("function");
  });

  it("returns 'calculatePercent'", () => {
    expect((calculatePercent(171, 87))).toEqual(51);
  });
});

