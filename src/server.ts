import app from './app'
import config from './app/config'

app.listen(config.PORT, () => {
  console.log(`Job safari server is runing on port ${config.PORT}`)
})
