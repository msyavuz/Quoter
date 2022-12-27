import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import react from "@vitejs/plugin-react";

const vitestConfig: VitestUserConfigInterface = {
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/tests/setup.js",
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Quoter/",
    plugins: [react()],
    test: vitestConfig.test,
});
