import Dexie from 'dexie';

export class AppDB extends Dexie {

  jobs!: Dexie.Table<any, number>;

  constructor() {
    super('FieldServiceDB');

    this.version(1).stores({
      jobs: '++id,status,synced'
    });
  }
}

export const db = new AppDB();