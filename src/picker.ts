import * as XLSX from "xlsx"
import { caculateColumnAndRow } from "./utils/calc"
import type { FiltersType } from "./utils/filter"
import { tranformSheetToRowByRow } from "./utils/tranformer/s2row"

interface IPickDataFromSheet {
    source: string                 // 数据源
    sheet?: string                 // 表名
    filters: FiltersType
}

export const PickDataFromSheet = ({ source, sheet, filters }: IPickDataFromSheet) => {
    const wb = XLSX.readFile(source)
    // 暂时只要 w 的值，进行结构化处理
    let ara = tranformSheetToRowByRow(wb, sheet)
    if (!ara) {
        return undefined
    }
    return ara

    // 计算行列数
    // const [c, r] = caculateColumnAndRow(d["!ref"] as string)



    // TODO 重新整理每一行的值，空格应当填充 undefined
    // TODO 计算列，进行行整理

    // const f = ara.filter(v => filters.every(fl => {
    //     if (Array.isArray(fl)) {
    //         return fl.some(fla => {
    //             if (fla.key < c) {
    //                 const val = !!v[fla.key] && !!v[fla.key].w ? v[fla.key].w : ""
    //                 return filterFn(val, fla.filter)
    //             }

    //             return true
    //         })
    //     } else {
    //         if (fl.key < c) {
    //             const val = !!v[fl.key] && !!v[fl.key].w ? v[fl.key].w : ""
    //             return filterFn(val, fl.filter)
    //         }

    //         return true
    //     }
    // }))

    // console.log(f)


}