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
    root.WorkspaceApi.WorkbinsworkbinIdaddinteractionData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.IxnReasonCode, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, IxnReasonCode, Kvpair) {
  'use strict';




  /**
   * The WorkbinsworkbinIdaddinteractionData model module.
   * @module model/WorkbinsworkbinIdaddinteractionData
   * @version 9.0.000.22.2269
   */

  /**
   * Constructs a new <code>WorkbinsworkbinIdaddinteractionData</code>.
   * @alias module:model/WorkbinsworkbinIdaddinteractionData
   * @class
   * @param interactionId {String} Id of the interaction
   */
  var exports = function(interactionId) {
    var _this = this;


    _this['interactionId'] = interactionId;


  };

  /**
   * Constructs a <code>WorkbinsworkbinIdaddinteractionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkbinsworkbinIdaddinteractionData} obj Optional instance to populate.
   * @return {module:model/WorkbinsworkbinIdaddinteractionData} The populated <code>WorkbinsworkbinIdaddinteractionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
      if (data.hasOwnProperty('interactionId')) {
        obj['interactionId'] = ApiClient.convertToType(data['interactionId'], 'String');
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
   * Id of the owner of the workbin
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * Id of the interaction
   * @member {String} interactionId
   */
  exports.prototype['interactionId'] = undefined;
  /**
   * @member {module:model/IxnReasonCode} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * A key/value pairs list of additional data.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}));


