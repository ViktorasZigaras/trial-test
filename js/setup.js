
// there can be various considerations here, f.e. is 4 a maximum amount of sub-sections;
// to use a smart function to format numbers;
// to limit description lengths or not;
// the fact that sections will have different heights if not limited manually;
// separating back and front, adding frameworks, etc;
// consider having EN and LT text versions, if needed;
// and so forth, to be determined later
export const setup = [
    {
        id: 1,
        title: 'Nekilnojamasis turtas',
        // this can be hardcoded later or a smart formatting function can be added to deal with this, turning a number 100000 into this kind of string
        value: '100 000 &euro;',
        decription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        subsections: [
            { title: 'Gyvenamasis namas' },
            { title: 'Garažas' },
            { title: 'Ūkinis pastatas' }
        ]
    },
    {
        id: 2,
        title: 'Namų turtas',
        value: '100 000 &euro;',
        decription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        subsections: [
            { title: 'Daiktai gyvenamajame name' },
            { title: 'Daiktai ūkiniuose pastatuose' },
            { title: 'Daiktai kieme' },
            { title: 'Darbdavio ir svečių daiktai' }
        ]
    },
    {
        id: 3,
        title: 'Elektroninė ir buitinė technika',
        value: '100 000 &euro;',
        decription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        subsections: [
            { title: 'Televizoriai' },
            { title: 'Kiompiuteriai' },
            { title: 'Mobilieji telefonai' },
            { title: 'Buitinė technika' }
        ]
    },
    {
        id: 4,
        title: 'Daiktai ne namuose',
        value: '100 000 &euro;',
        decription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        subsections: [
            { title: 'Dviračiai ir vežimėliai' },
            { title: 'Su savim išsinešti daiktai' },
            { title: 'Daiktai kelionėje' },
            { title: 'Studento daiktai' }
        ]
    },
    {
        id: 5,
        title: 'Skubi pagalba namuose',
        value: '100 000 &euro;',
        decription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        subsections: [
            { title: 'Lorem Ipsum' },
            { title: 'Lorem Ipsum' },
            { title: 'Lorem Ipsum' },
            { title: 'Lorem Ipsum' }
        ]
    },
    {
        id: 6,
        title: 'Žala kaimynams',
        value: '100 000 &euro;',
        decription: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        subsections: [
            { title: 'Lorem Ipsum' },
            { title: 'Lorem Ipsum' },
            { title: 'Lorem Ipsum' },
            { title: 'Lorem Ipsum' }
        ]
    }
];