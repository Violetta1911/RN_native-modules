import SQLite from 'react-native-sqlite-storage';
//  SQLite.enablePromise(true)

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTERGER PRIMERY KEY NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL, lng  REAL ); ',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err)
        },
      );
    });
  });
  return promise
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?); `,
        [title, imageUri, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err)
        },
      );
    });
  });
  return promise

}

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          resolve(result);
          
        },
        (_, err) => {
          reject(err)
        },
      );
    });
  });
  return promise

}
export const delPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM places WHERE title = ?',
        [1],
        (_, result) => {
          resolve(result);
          
        },
        (_, err) => {
          reject(err)
        },
      );
    });
  });
  return promise

}