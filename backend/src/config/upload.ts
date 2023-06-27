import multer from 'multer'
import crypto from 'crypto'
import { resolve } from 'path'

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString('hex')

                    const fileExtentionSplit = file.originalname.split('.')
                    const fileExtention = fileExtentionSplit[fileExtentionSplit.length - 1]

                    const filename = `${fileHash}.${fileExtention}`

                    return callback(null, filename)
                }
            })
        }
    }
}