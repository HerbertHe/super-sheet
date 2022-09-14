import { test } from "vitest"
import { PickDataFromSheet } from "../src/picker"
import path from "path"

const testFile = path.join(path.resolve(), "__test__", "test.xlsx")

test("Test pick data from sheet", () => {
	const res = PickDataFromSheet({
		source: testFile,
		sheet: "Sheet1",
		filters: [{
			key: 0,
			filter: /.*/
		},
		{
			key: 4,
			filter: /.*/
		}]
	})

    console.log(res)
})