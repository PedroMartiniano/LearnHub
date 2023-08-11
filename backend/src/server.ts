import { app } from "./app"
import "express-async-errors"

app.listen(3333, () => console.log('Server up and running on port 3333.'))