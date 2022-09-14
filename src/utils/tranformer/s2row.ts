import type { WorkBook } from "xlsx"
import { calc26To10 } from "../calc"

// TODO 加上计算列号作为key
interface IDataArray {
    key: number     // 计算列序数
    cell: string    // 单元格
    w: string       // w 值
}

/**
 * 转化为逐行读取
 * -> 整行表格高亮时非常有用
 * @param wb
 * @param sheet
 * @returns
 */
export const tranformSheetToRowByRow = (wb: WorkBook, sheet?: string) => {
    const { SheetNames, Sheets } = wb
    if (!!sheet && !SheetNames.includes(sheet)) {
        return undefined
    }

    const d = !!sheet ? Sheets[sheet] : Sheets[SheetNames[0]]
    const ref = d["!ref"]

    if (!ref) {
        return undefined
    }

    let ara: IDataArray[][] = []
    for (let ce in d) {
        const reg = /([A-Z]+)([0-9]+)/
        const ans = reg.exec(ce)

        if (!!ans) {
            const [, col, row] = [...ans]
            const rv = ara[parseInt(row) - 1]
            if (!!rv) {
                ara[parseInt(row) - 1].push({
                    key: calc26To10(col) - 1,
                    cell: ce,
                    w: d[ce].w
                })
            } else {
                ara[parseInt(row) - 1] = [{ key: calc26To10(col) - 1, cell: ce, w: d[ce].w }]
            }
        }
    }

    return ara
}