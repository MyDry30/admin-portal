import * as XLSX from "xlsx";

const downloadSpreadsheet = (data, name) => {
	const worksheet = XLSX.utils.json_to_sheet(data);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, name);
	const excelBuffer = XLSX.write(workbook, {
		bookType: "xlsx",
		type: "array",
	});
	saveAsExcelFile(excelBuffer, name);
};

const saveAsExcelFile = (buffer, fileName) => {
	const data = new Blob([buffer], { type: "application/octet-stream" });
	const url = window.URL.createObjectURL(data);
	const link = document.createElement("a");
	link.href = url;
	link.setAttribute("download", `${fileName}.xlsx`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

export default downloadSpreadsheet;
