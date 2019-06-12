import Immutable from 'immutable';
import PouchDB from 'pouchdb-browser';

const db = new PouchDB('grooveboat');

const get = id => db.get(id).then((result) => {
  return Immutable.fromJS(result);
});

const put = (doc) => {
  if (!Immutable.Iterable.isIterable(doc)) return db.put(doc);
  return db.put(doc.toJS());
};

export default {
  ...db,
  get,
  put,
};
