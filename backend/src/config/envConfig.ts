import * as dotenv from 'dotenv'

dotenv.config()

export default {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_expiration: process.env.JWT_EXPIRATION,
    RefreshToken_expires_seconds: 60 * 60 * 24 * 7, // 7 days 
    hashRounds: 8,
    diskStorage: process.env.DISK_STORAGE
}