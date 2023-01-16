const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "https://minio.kaptacz.com:9000",
      "minio.kaptacz.com",
      "akeno-pl.netlify.app",
      "akeno-medusajs-admin-production.up.railway.app",
      "akeno-medusajs-storefront-production.up.railway.app",
      "akeno.pl"
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
