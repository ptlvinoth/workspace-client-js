/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.27.2423
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
    root.WorkspaceApi.MediamediatypeinteractionsidadddocumentData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidadddocumentData model module.
   * @module model/MediamediatypeinteractionsidadddocumentData
   * @version 9.0.000.27.2423
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidadddocumentData</code>.
   * @alias module:model/MediamediatypeinteractionsidadddocumentData
   * @class
   * @param documentId {String} The id of the document to be added.
   */
  var exports = function(documentId) {
    var _this = this;

    _this['documentId'] = documentId;



  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidadddocumentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidadddocumentData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidadddocumentData} The populated <code>MediamediatypeinteractionsidadddocumentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the document to be added.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * The size of the document to be added.
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * The mime type of the document to be added.
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;
  /**
   * The name of the document to be added.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


