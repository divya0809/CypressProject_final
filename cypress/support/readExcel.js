/*// cypress/support/readExcel.js
const XLSX = require('xlsx');

function readExcel(filePath, sheetName) {
  const workbook = XLSX.readFile("cypress/fixtures/users.xlsx");
  const sheet = workbook.Sheets[sheet1];
  return XLSX.utils.sheet_to_json(sheet);
}

module.exports = { readExcel };
*/
/*// cypress/support/readExcel.js
const XLSX = require('xlsx');

function readExcel(fileData) {
  const workbook = XLSX.read(fileData, { type: 'binary' });
  const sheetName = workbook.SheetNames[0];  // Use the first sheet
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);  // Convert to JSON
  return data;
}

export { readExcel };

*/

// cypress/support/readExcel.js
/*import XLSX from 'xlsx';

function readExcel(filePath) {
  const fileData = cy.readFile(filePath, 'binary'); // Read as binary
  const workbook = XLSX.readFile(fileData); // Process as binary

  // Assuming you want the first sheet
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = XLSX.utils.sheet_to_json(sheet);
  return data;
}

export { readExcel };
*/
