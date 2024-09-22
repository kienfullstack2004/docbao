import Auth from "./Auth"

const router = (app) => {
    app.use('/api/v1',Auth);
}

export default router;