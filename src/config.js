let config = {
  TEST_HOST: "localhost:4000",
  PROD_HOST: "http://" // 正式地址
}

let HOST = process.env.NODE_ENV === "production" ? config.PROD_HOST : config.TEST_HOST

export default HOST

