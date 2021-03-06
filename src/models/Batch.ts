export class Batch {
    id: number;
    trainerId: number;
    batchName: string;
    startDate: Date;
    durationInDays: string;

/**
 *  Static function for creating a Batch instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface BatchRow and uses that to
 * create an instance of Batch.
 */

static from(obj: BatchRow): Batch {
    const batch = new Batch(
        obj.id,
        obj.trainer_id,
        obj.batch_name,
        new Date(obj.start_date),
        obj.duration_in_days
    );
    return batch;
}

    constructor( id: number, trainerId: number, batchName: string, startDate: Date, durationInDays: string) {
        this.id = id;
        this.trainerId = trainerId;
        this.batchName = batchName;
        this.startDate = startDate;
        this.durationInDays = durationInDays;
    }
}

export interface BatchRow {
    id: number;
    trainer_id: number;
    batch_name: string;
    start_date: Date;
    duration_in_days: string;
    // email: string;
}


