import { app } from "./app"
import "express-async-errors"
import { env } from "./env"

app.listen(env.PORT, () => console.log(`server up and running on port ${env.PORT}`))