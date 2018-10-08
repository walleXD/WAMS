const { join } = require("path")

module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config
    config.entry.main = [join(__dirname, "src", "index.ts")]

    config.resolve = {
      extensions: [".ts", ".js", ".json"]
    }

    config.module.rules.push(
      {
        test: /\.ts?$/,
        loader: "assemblyscript-typescript-loader",
        include: /src\/core/, //to avoid a conflict with other ts file who use 'ts-load',so you can division them with prop 'include'
        options: {
          limit: 1000,
          name: `static/assembly/[name].[hash:8].wasm`
        }
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        exclude: /src\/core/
      }
    )

    console.log(config)
    return config
  }
}
