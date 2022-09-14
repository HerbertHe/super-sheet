import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: {
        // "index": "src/index.ts",
        "sheet": "src/sheet.ts",
        "picker": "src/picker.ts"
    },
    clean: true,
    dts: true,
    format: ["esm", "cjs"]
})