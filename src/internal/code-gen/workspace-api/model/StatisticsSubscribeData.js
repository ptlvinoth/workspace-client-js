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
    define(['ApiClient', 'model/StatisticsSubscribeDataData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatisticsSubscribeDataData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.StatisticsSubscribeData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.StatisticsSubscribeDataData);
  }
}(this, function(ApiClient, StatisticsSubscribeDataData) {
  'use strict';




  /**
   * The StatisticsSubscribeData model module.
   * @module model/StatisticsSubscribeData
   * @version 9.0.000.21.2241
   */

  /**
   * Constructs a new <code>StatisticsSubscribeData</code>.
   * @alias module:model/StatisticsSubscribeData
   * @class
   * @param data {module:model/StatisticsSubscribeDataData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>StatisticsSubscribeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticsSubscribeData} obj Optional instance to populate.
   * @return {module:model/StatisticsSubscribeData} The populated <code>StatisticsSubscribeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = StatisticsSubscribeDataData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StatisticsSubscribeDataData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


