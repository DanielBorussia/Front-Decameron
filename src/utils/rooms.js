export const getTypeAccomodation = (type) => {
    const typeAccomodation = {
        '1' : 'Sencilla',
        '2' : 'Doble',
        '3' : 'Triple',
        '4' : 'Cuadruple'
    }
    return typeAccomodation[type];
}

export const getTypeRoom = (type) => {
    const typeAccomodation = {
        '1' : 'Estandar',
        '2' : 'Junior',
        '3' : 'Suite',
    }
    return typeAccomodation[type];
}

export const typeRooms = [
    {id : 1, name: 'Estandar'},
    {id : 2, name: 'Junior'},
    {id : 3, name: 'Suite'},
];

export const typeAccomodation = [
    {id : 1, name: 'Sencilla'},
    {id : 2, name: 'Doble'},
    {id : 3, name: 'Triple'},
    {id : 4, name: 'Cuádrupe'},
];