import { Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {

    static users = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            // Test si id est defini => if(id !== undefined/null/empty)
            if (id) {
                const user = await User.findById(id)
                res.send(user)
            } else {
                const user = await User.find(req.query)
                res.send(user)
            }
        } catch (e) {
            res.status(400).send(e)
        }
    }

    static delete = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            if (id) {
                await User.deleteOne({ _id: id })
                res.send({ message: `User: ${id} deleted`})
            } else {
                await User.deleteMany()
                res.send({ message: `All user have been deleted`})
            }
        } catch(e) {
            console.log(e)
            res.status(400).send(e)
        }
    }

    static wrote = async (req: Request, res: Response) => {
        //const id = req.params.id
        const { id } = req.params
        
        try {
            const user = await User.findById(id).populate("articles")
            res.send(user)
        } catch(e) {
            res.status(400).send(e)
        }
    }
}