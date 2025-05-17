sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices(oEvent) {
			// build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("invoiceList"); // viewdeki invoiceList id'sine ait olan elementi(list) al
			const oBinding = oList.getBinding("items");//list içindeki items verisini çek
			oBinding.filter(aFilter);// gelen veriyi filtrele
		},
		onPress() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
		}
		
		// ÇOKLU FILTRELEME
		// onFilterInvoices() {
		// 	// build filter array
		// 	const aFilter = [];
		// 	const sQuery1 = this.byId("search1").getValue();
		// 	if (sQuery1) {
		// 		aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery1));
		// 	}
		
		// 	const sQuery2 = this.byId("search2").getValue();
		// 	if (sQuery2) {
		// 		aFilter.push(new Filter("ExtendedPrice", FilterOperator.GT, sQuery2));
		// 	}
		
		// 	// filter binding
		// 	const oList = this.byId("invoiceList");
		// 	const oBinding = oList.getBinding("items");
		// 	oBinding.filter(aFilter);
		// }
	});
});