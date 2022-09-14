export const caculateColumnAndRow = (ref: string) => {
    const reg = /([A-Z]+)([0-9]+)\:([A-Z]+)([0-9]+)/
    const [, beginCol, beginRow, endCol, endRow] = reg.exec(ref) as RegExpExecArray

    const row = parseInt(endRow) - parseInt(beginRow) + 1
    const col = [endCol, beginCol].map(c =>
        calc26To10(c)
    ).reduce((pre, curr) =>
        pre - curr + 1
    )
    return [col, row]
}

// 二十六进制转化为十进制
export const calc26To10 = (s: string): number => {
    const q = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return s.split("").reverse().reduce((pre, curr, index) => pre + Math.pow(26, index) * (q.indexOf(curr) + 1), 0)
}

// 十进制转化为二十六进制
export const calc10To26 = (n: number): string => {
    let s = ""
    while (n > 0) {
        let m = n % 26
        if (m === 0) {
            m = 26
        }

        s = String.fromCharCode(m + 64) + s
        n = Math.floor((n - m) / 26)
    }

    return s
}