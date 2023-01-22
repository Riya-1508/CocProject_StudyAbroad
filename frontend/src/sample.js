const Samples =
    [
        {
            id: 1,
            Courses:
            {
                College: {
                    ida: 1,
                    Names: 'UK',
                    Details: "",
                    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
                },
                College: {
                    ida: 2,
                    Names: 'USA',
                    Details: "",
                    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
                },
                College: {
                    ida: 3,
                    Names: 'Germany',
                    Details: "",
                    img: 'https://www.worldatlas.com/r/w1200/upload/21/11/9e/berlin-germany-country-government.jpg',
                },
                College: {
                    ida: 4,
                    Names: 'Canada',
                    Details: "",
                    img: 'https://static.india.com/wp-content/uploads/2018/08/Canada-1.jpg',
                },
                College: {
                    ida: 5,
                    Names: 'Australia',
                    Details: "",
                    img: 'https://i.insider.com/5f3424f2988ee31668198a09?width=1136&format=jpeg',
                }
            }
        },
        {
            id: 2,
            Courses:
            {
                College: {
                    ida: 1,
                    Names: 'UK',
                    Details: "",
                    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
                },
                College: {
                    ida: 2,
                    Names: 'USA',
                    Details: "",
                    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
                },
                College: {
                    ida: 3,
                    Names: 'Germany',
                    Details: "",
                    img: 'https://www.worldatlas.com/r/w1200/upload/21/11/9e/berlin-germany-country-government.jpg',
                },
                College: {
                    ida: 4,
                    Names: 'Canada',
                    Details: "",
                    img: 'https://static.india.com/wp-content/uploads/2018/08/Canada-1.jpg',
                },
                College: {
                    ida: 5,
                    Names: 'Australia',
                    Details: "",
                    img: 'https://i.insider.com/5f3424f2988ee31668198a09?width=1136&format=jpeg',
                }
            }
        },
        {
            id: 3,
            Courses:
            {
                College: {
                    ida: 1,
                    Names: 'UK',
                    Details: "",
                    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
                },
                College: {
                    ida: 2,
                    Names: 'USA',
                    Details: "",
                    img: 'https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg',
                },
                College: {
                    ida: 3,
                    Names: 'Germany',
                    Details: "",
                    img: 'https://www.worldatlas.com/r/w1200/upload/21/11/9e/berlin-germany-country-government.jpg',
                },
                College: {
                    ida: 4,
                    Names: 'Canada',
                    Details: "",
                    img: 'https://static.india.com/wp-content/uploads/2018/08/Canada-1.jpg',
                },
                College: {
                    ida: 5,
                    Names: 'Australia',
                    Details: "",
                    img: 'https://i.insider.com/5f3424f2988ee31668198a09?width=1136&format=jpeg',
                }
            }
        },

    ];

export default Samples;

export function Sample(id) {
    return Sample.find((Sample) => Sample.id === id);
}
