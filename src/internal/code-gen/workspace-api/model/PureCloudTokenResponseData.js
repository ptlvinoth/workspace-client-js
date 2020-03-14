/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.72.3561
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.PureCloudTokenResponseData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PureCloudTokenResponseData model module.
   * @module model/PureCloudTokenResponseData
   * @version 9.0.000.72.3561
   */

  /**
   * Constructs a new <code>PureCloudTokenResponseData</code>.
   * @alias module:model/PureCloudTokenResponseData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PureCloudTokenResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PureCloudTokenResponseData} obj Optional instance to populate.
   * @return {module:model/PureCloudTokenResponseData} The populated <code>PureCloudTokenResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the exchanged access token
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * type of the token
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;
  /**
   * expire time in seconds
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;



  return exports;
}));

