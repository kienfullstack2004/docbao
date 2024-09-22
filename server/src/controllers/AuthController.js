import * as services from "../services"

export const getAlert = (req,res,next) => {
  try {
    res.status(200).json({
        err:0,
        msg:'Hello Controller'
    })
  } catch (error) {
    return res.status(404).json({
        err: 404,
        msg:'Interal Server Error'
    })
  }
}