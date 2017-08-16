/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    root.WorkspaceApi.VoicecallsiddeleteuserdatapairData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoicecallsiddeleteuserdatapairData model module.
   * @module model/VoicecallsiddeleteuserdatapairData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsiddeleteuserdatapairData</code>.
   * @alias module:model/VoicecallsiddeleteuserdatapairData
   * @class
   * @param key {String} 
   */
  var exports = function(key) {
    var _this = this;

    _this['key'] = key;
  };

  /**
   * Constructs a <code>VoicecallsiddeleteuserdatapairData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsiddeleteuserdatapairData} obj Optional instance to populate.
   * @return {module:model/VoicecallsiddeleteuserdatapairData} The populated <code>VoicecallsiddeleteuserdatapairData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;



  return exports;
}));


