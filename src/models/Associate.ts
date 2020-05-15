export class Associate {
    id: number;
    trainerId: number;
    teamId: number;
    firstName: string;
    lastName: string;
    birthdate: Date;

/**
 *  Static function for creating an Associate  instance based on
 *  the structure within the database
 */

    static from(obj: AssociateRow): Associate {
        const associate = new Associate(
            obj.id, obj.trainer_id, obj.team_id, obj.first_name, obj.last_name, new Date(obj.birthdate)
        );
        return associate;
    }

    constructor( id: number, trainerId: number, teamId: number, firstName: string, lastName: string, birthdate: Date) {
        this.id = id;
        this.trainerId = trainerId;
        this.teamId = teamId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
    }
}


export interface AssociateRow {
    id: number;
    trainer_id: number;
    team_id: number;
    first_name: string;
    last_name: string;
    birthdate: Date;
}