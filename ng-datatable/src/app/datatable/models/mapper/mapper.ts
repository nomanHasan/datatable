const toLiteral = map => {
    return Array.from(map).reduce((obj, [key, value]) => (
        Object.assign(obj, { [key]: value })
      ), { });
};
