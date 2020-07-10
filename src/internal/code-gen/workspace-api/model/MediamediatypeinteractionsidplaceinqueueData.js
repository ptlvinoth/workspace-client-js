/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.78.3880
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IxnReasonCode', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IxnReasonCode'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidplaceinqueueData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.IxnReasonCode, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, IxnReasonCode, Kvpair) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidplaceinqueueData model module.
   * @module model/MediamediatypeinteractionsidplaceinqueueData
   * @version 9.0.000.78.3880
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidplaceinqueueData</code>.
   * @alias module:model/MediamediatypeinteractionsidplaceinqueueData
   * @class
   * @param queue {String} The name of the queue where the Workspace API should place the interaction.
   */
  var exports = function(queue) {
    var _this = this;

    _this['queue'] = queue;





  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidplaceinqueueData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidplaceinqueueData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidplaceinqueueData} The populated <code>MediamediatypeinteractionsidplaceinqueueData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = IxnReasonCode.constructFromObject(data['reason']);
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], [Kvpair]);
      }
      if (data.hasOwnProperty('addedProperties')) {
        obj['addedProperties'] = ApiClient.convertToType(data['addedProperties'], [Kvpair]);
      }
      if (data.hasOwnProperty('changedProperties')) {
        obj['changedProperties'] = ApiClient.convertToType(data['changedProperties'], [Kvpair]);
      }
      if (data.hasOwnProperty('deletedProperties')) {
        obj['deletedProperties'] = ApiClient.convertToType(data['deletedProperties'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The name of the queue where the Workspace API should place the interaction.
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * @member {module:model/IxnReasonCode} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * A collection of key/value pairs.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * A collection of key/value pairs of properties to add to the interaction.
   * @member {Array.<module:model/Kvpair>} addedProperties
   */
  exports.prototype['addedProperties'] = undefined;
  /**
   * A collection of key/value pairs of properties to change on the interaction.
   * @member {Array.<module:model/Kvpair>} changedProperties
   */
  exports.prototype['changedProperties'] = undefined;
  /**
   * A collection of key/value pairs of properties to delete from the interaction.
   * @member {Array.<module:model/Kvpair>} deletedProperties
   */
  exports.prototype['deletedProperties'] = undefined;



  return exports;
}));


