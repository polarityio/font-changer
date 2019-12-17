'use strict';

let Logger;

function startup(logger) {
  Logger = logger;
}

function doLookup(entities, options, cb) {
  Logger.info(entities);
  cb(
    null,
    entities.reduce((acc, entity) => {
      if (entity.value.length > 0) {
        acc.push({
          entity,
          data: {
            summary: [],
            details: {
              text: entity.value
            }
          }
        });
      }
      return acc;
    }, [])
  );
}

module.exports = {
  doLookup,
  startup
};
