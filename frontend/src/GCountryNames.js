const GCountryNames = [
  {
    id: 1,
    Names: 'Canada',
    Details: "",
    img: 'https://static.india.com/wp-content/uploads/2018/08/Canada-1.jpg',
  },
  {
    id: 2,
    Names: 'Germany',
    Details: "",
    img: 'https://www.worldatlas.com/r/w1200/upload/21/11/9e/berlin-germany-country-government.jpg',
  },
  {
    id: 3,
    Names: 'UK',
    Details: "",
    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
  },
  {
    id: 4,
    Names: 'Australia',
    Details: "",
    img: 'https://i.insider.com/5f3424f2988ee31668198a09?width=1136&format=jpeg',
  },
  {
    id: 5,
    Names: 'USA',
    Details: "",
    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
  },
];

export default GCountryNames;

export function GCountryName(id) {
  return GCountryNames.find((GCountryNames) => GCountryNames.id === id);
}
