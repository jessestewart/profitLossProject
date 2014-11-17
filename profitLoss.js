var report = function (tc, ns, pps, sps, r, cp, p, pfs) {
	alert("Ticker Symbol: " + tc + "\nNumber of Shares: " + ns + 
		"\nPurchase Price Per Share: $" + pps + "\nSelling Price Per Share: $" + sps + 
		"\nRevenue: $" + r + "\nCost to purchase: $" + cp + "\nProfit: $" + p + 
		"\nProfit Per Share: $" + pfs);
	//Not setting precision for the numbers since we are dealing with securities
};

document.getElementById("calculate").onclick = function () {
	if (document.getElementById("ticker").value != '') {
		if (document.getElementsByName("shares")[0].value != 0) {
			if (document.getElementsByName("cost")[0].value != 0) {
				if (document.getElementsByName("sell")[0].value != 0) {
					var a = document.getElementById("ticker").value;
					var b = document.getElementsByName("shares")[0].value;
					var c = document.getElementsByName("cost")[0].value;
					var d = document.getElementsByName("sell")[0].value;
					var e = b * d;
					var f = b * c;
					var g = e - (b * c);
					var h = d - c;
					report(a, b, c, d, e, f, g, h);
				};
			};
		};
	};
};

var showDescription = function (description, show) {
	document.getElementById(description).style.display = show;
};
