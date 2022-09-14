import * as XLSX from "xlsx"

/**
 * 获取表名
 * @param f
 * @returns
 */
export const GetSheetsName = (f: string) => {
	const { SheetNames } = XLSX.readFile(f)
	return SheetNames
}

/**
 * 获取表的个数
 * @param f
 * @returns
 */
export const GetSheetsNumber = (f: string) => {
	const { SheetNames } = XLSX.readFile(f)
	return SheetNames.length
}