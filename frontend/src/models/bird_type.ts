export interface Bird {
    id?:        string;
    imageUrl?:    string;
    name    :   string;
    power   :   string;
    genre   :   string;
    size    :   string;
    scope   :   string;
    color   :   string;
}


export const BirdEmptyState : Bird = {
    name    :   '',
    power   :   '',
    genre   :   '',
    size    :   '',
    scope   :   '',
    color   :   '',
}