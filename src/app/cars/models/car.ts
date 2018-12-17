// export interface Car {
//         id: number;
//         model: string;
//         type: string;
//         year: number;
//         color: string;
//         cost: number;
//         isFullyDamaged: boolean;
//         clientFirstName: string;
//         clientSurname: string;
//         power: number;
//         plate: string;
//         deliveryDate: string;
//         deadline: string;
// }

export interface Car {
        clientFirstName: string;
        clientSurname: string;
        color: string;
        cost: number;
        deadline: Date;
        deliveryDate: Date;
        id: number;
        isFullyDamaged: boolean;
        model: string;
        plate: string;
        power: number;
        type: string;
        year: string;
        key: string;
}

