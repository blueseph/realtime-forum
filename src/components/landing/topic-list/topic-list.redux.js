import { database } from '../../../utils/firebase';

const LOAD = 'rtf/topics/LOAD';
const LOADSUCCESS = 'rtf/topics/LOADSUCCESS';
const LOADFAIL = 'rtf/topics/LOADFAIL';

const CREATE = 'rtf/topics/CREATE';
const CREATESUCCESS = 'rtf/topics/CREATESUCCESS';
const CREATEFAIL = 'rtf/topics/CREATEFAIL';

const LOADNEWTOPIC = 'rtf/topics/LOADNEWTOPIC';

const initialState = {
  topics: {},
  loading: {
    topic: false,
    create: false,
  },
  errors: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { ...state, loading: { ...state.loading, topic: true } };
    }

    case LOADSUCCESS: {
      return { ...state, loading: { ...state.loading, topic: false },  topics: action.topics };
    }

    case LOADFAIL: {
      return { ...state, loading: { ...state.loading, topic: false }, errors: [ ...state.errors, { type: 'load', error: action.error }, ] };
    }

    case LOADNEWTOPIC: {
      return { ...state, topics: { ...state.topics, [action.key]: action.topic, }};
    }

    case CREATE: {
      return { ...state, loading: { ...state.loading, create: true, }};
    }

    case CREATESUCCESS: {
      return { ...state, loading: { ...state.loading, create: false, }, topics: { ...state.topics }};
    }

    case CREATEFAIL: {
      return { ...state, loading: { ...state.loading, create: false, }, errors: [ ...state.errors, { type: 'create', error: action.error }] };
    }

    default:
      return state;
  }
}

export function loadTopics() {
  return { type: LOAD, };
}

export function finishLoadingTopics(topics) {
  return { type: LOADSUCCESS, topics, };
}

export function failLoadingTopics(error) {
  return { type: LOADFAIL, error, };
}

export function createTopic() {
  return { type: CREATE, };
}

export function finishCreatingTopic(topic) {
  return { type: CREATESUCCESS, topic, };
}

export function failCreatingTopic(error) {
  return { type: CREATEFAIL, error, };
}

export function loadNewTopic(topic, key) {
  return { type: LOADNEWTOPIC, topic: topic.val(), key};
};

export function getTopics() {
  return async dispatch => {
    dispatch(loadTopics());
    try {
      const topics = await database.ref('topics/').once('value');

      dispatch(finishLoadingTopics(topics.val()));
    } catch(error) {
      dispatch(failLoadingTopics(error));
    }
  }
}

export function addTopic(topic) {
  return async dispatch => {
    dispatch(createTopic(topic));
    try {
      const record = await database.ref('topics/').push(topic);
      dispatch(finishCreatingTopic(record));
    } catch(error) {
      console.log({error})
      dispatch(failCreatingTopic(error));
    }
  }
}
