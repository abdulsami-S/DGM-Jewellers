// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: "automatic",
//       babel: {
//         presets: [
//           ["@babel/preset-react", { runtime: "automatic" }]
//         ],
//       },
//     }),
//   ],
//   esbuild: {
//     loader: "jsx",
//     include: /src\/.*\.js$/, // ✅ allow .js files to use JSX
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
