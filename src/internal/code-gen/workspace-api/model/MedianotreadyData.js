/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.22.2269
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
    root.WorkspaceApi.MedianotreadyData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.IxnReasonCode, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, IxnReasonCode, Kvpair) {
  'use strict';




  /**
   * The MedianotreadyData model module.
   * @module model/MedianotreadyData
   * @version 9.0.000.22.2269
   */

  /**
   * Constructs a new <code>MedianotreadyData</code>.
   * @alias module:model/MedianotreadyData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MedianotreadyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MedianotreadyData} obj Optional instance to populate.
   * @return {module:model/MedianotreadyData} The populated <code>MedianotreadyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
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
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
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


