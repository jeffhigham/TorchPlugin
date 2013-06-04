/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */
 cordova.define("cordova/plugin/torch", function(require, exports, module) {
 	var exec = require('cordova/exec');

	function Torch()
	{
		this._isOn = false;
		var self = this;
	
		this.__defineGetter__("isOn", function() { return self._isOn; });	
	}

	Torch.prototype.on = function()
	{
		var self = this;
		exec(function() {
			self._isOn = true;		
		}, null, "Torch", "on", []);
	};

	Torch.prototype.off = function()
	{
		var self = this;
		exec(function() {
			self._isOn = false;		
		}, null, "Torch", "off", []);
	};

 	var torch = new Torch();
 	module.exports = torch;
	
 });
