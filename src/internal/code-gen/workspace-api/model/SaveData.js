/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.21.2241
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
    define(['ApiClient', 'model/MediaemailinteractionsidsaveData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaemailinteractionsidsaveData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SaveData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediaemailinteractionsidsaveData);
  }
}(this, function(ApiClient, MediaemailinteractionsidsaveData) {
  'use strict';




  /**
   * The SaveData model module.
   * @module model/SaveData
   * @version 9.0.000.21.2241
   */

  /**
   * Constructs a new <code>SaveData</code>.
   * @alias module:model/SaveData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SaveData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaveData} obj Optional instance to populate.
   * @return {module:model/SaveData} The populated <code>SaveData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediaemailinteractionsidsaveData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediaemailinteractionsidsaveData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


