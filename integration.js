'use strict';

let Logger;

function startup(logger) {
  Logger = logger;
}

function doLookup(entities, options, cb) {
  Logger.debug(entities);
  cb(
    null,
    entities.map((entity) => {
      return {
        entity,
        data: {
          summary: [],
          details: {
            text: entity.value
          }
        }
      };
    })
  );
}

module.exports = {
  doLookup,
  startup
};
