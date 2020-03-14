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
    define(['ApiClient', 'model/Statistic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Statistic'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.StatisticsSubscribeDataData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Statistic);
  }
}(this, function(ApiClient, Statistic) {
  'use strict';




  /**
   * The StatisticsSubscribeDataData model module.
   * @module model/StatisticsSubscribeDataData
   * @version 9.0.000.72.3561
   */

  /**
   * Constructs a new <code>StatisticsSubscribeDataData</code>.
   * @alias module:model/StatisticsSubscribeDataData
   * @class
   * @param statistics {Array.<module:model/Statistic>} 
   */
  var exports = function(statistics) {
    var _this = this;

    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>StatisticsSubscribeDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticsSubscribeDataData} obj Optional instance to populate.
   * @return {module:model/StatisticsSubscribeDataData} The populated <code>StatisticsSubscribeDataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], [Statistic]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Statistic>} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));


