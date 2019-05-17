/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.43.2934
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
    root.WorkspaceApi.RecentData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RecentData model module.
   * @module model/RecentData
   * @version 9.0.000.43.2934
   */

  /**
   * Constructs a new <code>RecentData</code>.
   * This includes the media channel where the target was recently used and the timestamp for when the target was used.
   * @alias module:model/RecentData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RecentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecentData} obj Optional instance to populate.
   * @return {module:model/RecentData} The populated <code>RecentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], 'String');
      }
      if (data.hasOwnProperty('timeStamp')) {
        obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The media channel where the target was recently used.
   * @member {String} media
   */
  exports.prototype['media'] = undefined;
  /**
   * The date and time when the target was used.
   * @member {Number} timeStamp
   */
  exports.prototype['timeStamp'] = undefined;



  return exports;
}));


