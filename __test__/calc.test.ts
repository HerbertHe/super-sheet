import { expect, test } from "vitest"
import { calc10To26, calc26To10 } from "../src/utils/calc"

test("Test calc26To10", () => {
    const res = calc26To10("AA")
    expect(res).toEqual(27)
})

test("Test calc10To26", () => {
    const res = calc10To26(28)
    expect(res).toEqual("AB")
})