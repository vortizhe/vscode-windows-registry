/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const windowRegistry = process.platform === 'win32' ? require('../build/Release/winregistry.node') : null;

export type HKEY = "HKEY_CURRENT_USER" | "HKEY_LOCAL_MACHINE" | "HKEY_CLASSES_ROOT" | "HKEY_USERS" | "HKEY_CURRENT_CONFIG";

export function EnumRegKeyKeys(hive: HKEY, path: string) : string[] {
	if (windowRegistry) {
		return windowRegistry.EnumRegKeyKeys(hive, path);
	}
	
	throw new Error('EnumRegKeyKeys is only available on Windows.');
}

export function EnumRegKeyValues(hive: HKEY, path: string) : string[] {
	if (windowRegistry) {
		return windowRegistry.EnumRegKeyValues(hive, path);
	}

	throw new Error('EnumRegKeyValues is only available on Windows.');
}

export function GetStringRegKey(hive: HKEY, path: string, name: string): string | undefined {
	if (windowRegistry) {
		return windowRegistry.GetStringRegKey(hive, path, name);
	}

	throw new Error('GetStringRegKey is only available on Windows.');
}

export function SetStringRegKey(hive: HKEY, path: string, name: string, value: string) : void {
	if (windowRegistry) {
		return windowRegistry.SetStringRegKey(hive, path, name, value);
	}
	
	throw new Error('SetStringRegKey is only available on Windows.');
}

export function DeleteRegKey(hive: HKEY, path: string, name: string) : void {
	if (windowRegistry) {
		return windowRegistry.DeleteRegKey(hive, path, name);
	} 

	throw new Error('DeleteRegKey is only available on Windows.');
}

export function DeleteRegKeyValue(hive: HKEY, path: string, name: string) : void {
	if (windowRegistry) {
		return windowRegistry.DeleteRegKeyValue(hive, path, name);
	}

	new Error('DeleteRegKeyValue is only available on Windows.');
}