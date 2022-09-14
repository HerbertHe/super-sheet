export type FilterFuncType = (v: string) => boolean

export type FilterType = RegExp | string | FilterFuncType

export interface IFilter {
    key: number
    filter: FilterType
}

/**
 * IFilter 为 与 关系
 * IFilterp[] 为 或 关系
 */
export type SingleFilterType = IFilter | IFilter[]

export type FiltersType = SingleFilterType[]

export const valFilter = (v: string, f: FilterType) => {
    if (!f) {
        return true
    }

    if (!v) {
        return false
    }

    if (typeof f === "string") {
        return v === f
    }

    if (typeof f === "function") {
        return f(v)
    }

    if (f instanceof RegExp) {
        return f.test(v)
    }

    return false
}