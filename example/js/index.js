/*jslint browser: true*/
var viewMethods = {
	outputData: function (outputElm, data) {
		"use strict";
		var table, tr, td;
		outputElm.innerHTML = "";
		if (data) {
			table = document.createElement("table");
			data.forEach(function (row) {
				var key;
				tr = document.createElement("tr");
				for (key in row) {
					if (row.hasOwnProperty(key)) {
						td = document.createElement("td");
						td.innerText = row[key];
						tr.appendChild(td);
					}
				}
				table.appendChild(tr);
			});
			outputElm.appendChild(table);
		}
	}
};

document.addEventListener("deviceready", function () {
	"use strict";
	var btnTestQuery = document.getElementById("btnTestQuery"),
		output = document.getElementById("output");
		var testUri="content://com.sie.plugin.context.contentprovider/context";
	btnTestQuery.addEventListener("click", function () {
		window.plugins.contentproviderplugin.query({
			contentUri: testUri,
			projection: null,
			selection: null,
			selectionArgs: null,
			sortOrder:null
		}, function (data) {
			console.log(JSON.stringify(data));
			viewMethods.outputData(output, data);
		}, function (err) {
			console.log("error query");
			output.innerText = "query error: " + err;
		});
	});

	var btnUpdate = document.getElementById("btnUpdate");
	btnUpdate.addEventListener("click", function () {
		var ctxkey = document.getElementById("key").value;
		var ctxvalue = document.getElementById("value").value
		window.plugins.contentproviderplugin.update(
			{
				contentUri:testUri,
				key: ctxkey,
				value: ctxvalue
			},
			function (data) {
				console.log(data);
				btnTestQuery.click();
			},
			function (err) {
				console.log(err);
			}
		)
	});
}, false);