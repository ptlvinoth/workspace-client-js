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
    root.WorkspaceApi.MediachatinteractionsiduploadfileData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsiduploadfileData model module.
   * @module model/MediachatinteractionsiduploadfileData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>MediachatinteractionsiduploadfileData</code>.
   * @alias module:model/MediachatinteractionsiduploadfileData
   * @class
   * @param documentId {String} The Id of document in UCS DataBase
   * @param documentName {String} the name of the document
   */
  var exports = function(documentId, documentName) {
    var _this = this;

    _this['documentId'] = documentId;
    _this['documentName'] = documentName;

  };

  /**
   * Constructs a <code>MediachatinteractionsiduploadfileData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsiduploadfileData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsiduploadfileData} The populated <code>MediachatinteractionsiduploadfileData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('standardResponseId')) {
        obj['standardResponseId'] = ApiClient.convertToType(data['standardResponseId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Id of document in UCS DataBase
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * the name of the document
   * @member {String} documentName
   */
  exports.prototype['documentName'] = undefined;
  /**
   * the id of standardResponses if the document is linked to Standard Responses
   * @member {String} standardResponseId
   */
  exports.prototype['standardResponseId'] = undefined;



  return exports;
}));

