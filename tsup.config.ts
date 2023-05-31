import { defineConfig } from "tsup-preset-solid";

export default defineConfig(
	{
		entry: "src/index.tsx",
		devEntry: true
	},
	{
		writePackageJson: true,
		dropConsole: true,
		cjs: true
	}
)
