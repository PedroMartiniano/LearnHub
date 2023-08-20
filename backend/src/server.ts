import { app } from "./app"
import "express-async-errors"
import { env } from "./env"

app.listen(env.PORT, () => console.log('Server up and running on port 3333.'))