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
    define(['ApiClient', 'model/UcsresponsessearchData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsresponsessearchData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.LuceneSearchStandardResponseData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsresponsessearchData);
  }
}(this, function(ApiClient, UcsresponsessearchData) {
  'use strict';




  /**
   * The LuceneSearchStandardResponseData model module.
   * @module model/LuceneSearchStandardResponseData
   * @version 9.0.000.24.2336
   */

  /**
   * Constructs a new <code>LuceneSearchStandardResponseData</code>.
   * @alias module:model/LuceneSearchStandardResponseData
   * @class
   * @param data {module:model/UcsresponsessearchData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>LuceneSearchStandardResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LuceneSearchStandardResponseData} obj Optional instance to populate.
   * @return {module:model/LuceneSearchStandardResponseData} The populated <code>LuceneSearchStandardResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsresponsessearchData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsresponsessearchData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


