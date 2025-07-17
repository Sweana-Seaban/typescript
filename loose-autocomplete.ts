// loose-autocomplete
type carNames = 'Celerio' | 'Brezza' | 'WagonR' | ( string & {} )

/* this provides auto complete with the above options
and we can provide any arbitrary string as well
*/
const newCar: carNames = 'Baleno';
