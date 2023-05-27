import { defineConfig } from "tsup-preset-solid";

defineConfig(
	{
		entry: "src/index.ts",
		devEntry: true
	},
	{
		dropConsole: true,
		cjs: true
	}
)
