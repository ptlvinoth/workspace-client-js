/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.23.2279
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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SendUserEventDataData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The SendUserEventDataData model module.
   * @module model/SendUserEventDataData
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>SendUserEventDataData</code>.
   * @alias module:model/SendUserEventDataData
   * @class
   * @param userData {Array.<module:model/Kvpair>} 
   */
  var exports = function(userData) {
    var _this = this;

    _this['userData'] = userData;


  };

  /**
   * Constructs a <code>SendUserEventDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendUserEventDataData} obj Optional instance to populate.
   * @return {module:model/SendUserEventDataData} The populated <code>SendUserEventDataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
      if (data.hasOwnProperty('callUuid')) {
        obj['callUuid'] = ApiClient.convertToType(data['callUuid'], 'String');
      }
      if (data.hasOwnProperty('connId')) {
        obj['connId'] = ApiClient.convertToType(data['connId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;
  /**
   * The universally unique identifier associated with the call.
   * @member {String} callUuid
   */
  exports.prototype['callUuid'] = undefined;
  /**
   * The connection ID for the call. This value comes from the Tlib event.
   * @member {String} connId
   */
  exports.prototype['connId'] = undefined;



  return exports;
}));


