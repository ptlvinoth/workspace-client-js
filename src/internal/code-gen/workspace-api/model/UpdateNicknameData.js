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
    define(['ApiClient', 'model/MediachatinteractionsidupdatenicknameData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediachatinteractionsidupdatenicknameData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UpdateNicknameData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediachatinteractionsidupdatenicknameData);
  }
}(this, function(ApiClient, MediachatinteractionsidupdatenicknameData) {
  'use strict';




  /**
   * The UpdateNicknameData model module.
   * @module model/UpdateNicknameData
   * @version 9.0.000.21.2241
   */

  /**
   * Constructs a new <code>UpdateNicknameData</code>.
   * @alias module:model/UpdateNicknameData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UpdateNicknameData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNicknameData} obj Optional instance to populate.
   * @return {module:model/UpdateNicknameData} The populated <code>UpdateNicknameData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediachatinteractionsidupdatenicknameData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediachatinteractionsidupdatenicknameData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


