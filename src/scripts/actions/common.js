export const error = type =>
  (status, message, extra) => ({
    type,
    payload: {
      status,
      message,
      extra
    }
  });

export const list = type =>
  (next, count, normalizedResults) => ({
    type: type,
    payload: {
      next,
      count,
      response: normalizedResults
    }
  });

export const get = type =>
  (id, normalizedResults) => ({
    type: type,
    payload: {
      id,
      response: normalizedResults
    }
  });