/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.31.2540
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidsetfocustimeData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidsetfocustimeData model module.
   * @module model/MediamediatypeinteractionsidsetfocustimeData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidsetfocustimeData</code>.
   * @alias module:model/MediamediatypeinteractionsidsetfocustimeData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidsetfocustimeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidsetfocustimeData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidsetfocustimeData} The populated <code>MediamediatypeinteractionsidsetfocustimeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Indicate the time in focus of interaction (in seconds).
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;



  return exports;
}));

