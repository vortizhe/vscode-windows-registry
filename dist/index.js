"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRegKeyValue = exports.DeleteRegKey = exports.SetStringRegKey = exports.GetStringRegKey = exports.EnumRegKeyValues = exports.EnumRegKeyKeys = void 0;
const windowRegistry = process.platform === 'win32' ? require('../build/Release/winregistry.node') : null;
function EnumRegKeyKeys(hive, path) {
    if (windowRegistry) {
        return windowRegistry.EnumRegKeyKeys(hive, path);
    }
    throw new Error('EnumRegKeyKeys is only available on Windows.');
}
exports.EnumRegKeyKeys = EnumRegKeyKeys;
function EnumRegKeyValues(hive, path) {
    if (windowRegistry) {
        return windowRegistry.EnumRegKeyValues(hive, path);
    }
    throw new Error('EnumRegKeyValues is only available on Windows.');
}
exports.EnumRegKeyValues = EnumRegKeyValues;
function GetStringRegKey(hive, path, name) {
    if (windowRegistry) {
        return windowRegistry.GetStringRegKey(hive, path, name);
    }
    throw new Error('GetStringRegKey is only available on Windows.');
}
exports.GetStringRegKey = GetStringRegKey;
function SetStringRegKey(hive, path, name, value) {
    if (windowRegistry) {
        return windowRegistry.SetStringRegKey(hive, path, name, value);
    }
    throw new Error('SetStringRegKey is only available on Windows.');
}
exports.SetStringRegKey = SetStringRegKey;
function DeleteRegKey(hive, path, name) {
    if (windowRegistry) {
        return windowRegistry.DeleteRegKey(hive, path, name);
    }
    throw new Error('DeleteRegKey is only available on Windows.');
}
exports.DeleteRegKey = DeleteRegKey;
function DeleteRegKeyValue(hive, path, name) {
    if (windowRegistry) {
        return windowRegistry.DeleteRegKeyValue(hive, path, name);
    }
    throw new Error('DeleteRegKeyValue is only available on Windows.');
}
exports.DeleteRegKeyValue = DeleteRegKeyValue;
//# sourceMappingURL=index.js.map