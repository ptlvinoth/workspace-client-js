/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2336
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
    root.WorkspaceApi.WorkbinsworkbinIdunsubscribeData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WorkbinsworkbinIdunsubscribeData model module.
   * @module model/WorkbinsworkbinIdunsubscribeData
   * @version 9.0.000.24.2336
   */

  /**
   * Constructs a new <code>WorkbinsworkbinIdunsubscribeData</code>.
   * @alias module:model/WorkbinsworkbinIdunsubscribeData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkbinsworkbinIdunsubscribeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkbinsworkbinIdunsubscribeData} obj Optional instance to populate.
   * @return {module:model/WorkbinsworkbinIdunsubscribeData} The populated <code>WorkbinsworkbinIdunsubscribeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Id of the owner of the workbin
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;



  return exports;
}));


