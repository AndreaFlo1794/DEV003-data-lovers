import { allData, orderingBy } from '../src/data.js';



// Copia reducida

// const filmsReduced = {films : [
//   {
//     "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
//     "title": "Castle in the Sky",
//     "release_date": "1986",
//     "rt_score": "95",
//   },
//   {
//     "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
//     "title": "My Neighbor Totoro",
//     "release_date": "1988",
//     "rt_score": "93",
//   },
//   {
//     "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
//     "title": "Tales from Earthsea",
//     "release_date": "2006",
//     "rt_score": "41",
//   },
//   {
//     "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
//     "title": "The Tale of the Princess Kaguya",
//     "release_date": "2013",
//     "rt_score": "100",
//   },
//   {
//     "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
//     "title": "When Marnie Was There",
//     "release_date": "2014",
//     "rt_score": "92",
//   },
// ]}

// // copia ordenada

// const filmsOrder = {films : [
//   {
//     "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
//     "title": "The Tale of the Princess Kaguya",
//     "release_date": "2013",
//     "rt_score": "100",
//   },
//   {
//     "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
//     "title": "Castle in the Sky",
//     "release_date": "1986",
//     "rt_score": "95",
//   },
//   {
//     "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
//     "title": "My Neighbor Totoro",
//     "release_date": "1988",
//     "rt_score": "93",
//   },
//   {
//     "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
//     "title": "When Marnie Was There",
//     "release_date": "2014",
//     "rt_score": "92",
//   },
//   {
//     "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
//     "title": "Tales from Earthsea",
//     "release_date": "2006",
//     "rt_score": "41",
//   },
// ]}

describe('allData', () => {
  it('is a function', () => {
    expect(typeof allData).toBe('function');
  });
});
//   it('returns films order', () => {
//     expect(allData(filmsReduced)).toBe(filmsOrder);
//   });
// });

describe('orderingBy', () => {
  it('is a function', () => {
    expect(typeof orderingBy).toBe('function');
  });
});

//   it('returns order by score', () => {
//     expect(orderingBy(filmsReduced, "rt_score")).toBe(filmsOrder);
//   });
// });


