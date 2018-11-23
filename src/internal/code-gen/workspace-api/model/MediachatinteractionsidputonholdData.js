/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.27.2423
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.WorkspaceApi.MediachatinteractionsidputonholdData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.IxnReasonCode, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, IxnReasonCode, Kvpair) {
  'use strict';




  /**
   * The MediachatinteractionsidputonholdData model module.
   * @module model/MediachatinteractionsidputonholdData
   * @version 9.0.000.27.2423
   */

  /**
   * Constructs a new <code>MediachatinteractionsidputonholdData</code>.
   * @alias module:model/MediachatinteractionsidputonholdData
   * @class
   * @param queue {String} The name of the queue where the Workspace API should put the interaction.
   */
  var exports = function(queue) {
    var _this = this;

    _this['queue'] = queue;


  };

  /**
   * Constructs a <code>MediachatinteractionsidputonholdData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidputonholdData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidputonholdData} The populated <code>MediachatinteractionsidputonholdData</code> instance.
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
    }
    return obj;
  }

  /**
   * The name of the queue where the Workspace API should put the interaction.
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * A collection of key/value pairs.
   * @member {module:model/IxnReasonCode} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * A collection of key/value pairs.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}));


