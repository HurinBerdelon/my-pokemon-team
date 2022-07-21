import fs from 'fs'
import { resolve } from 'path'
import { tmpUploadFolder } from '../../../../config/tmpUploadFolder';

import { IStorageProvider } from "../IStorageProvider";

class LocalStorageProvider implements IStorageProvider {
    async save(folder: string, file: string): Promise<string> {
        await fs.promises.rename(
            resolve(tmpUploadFolder, file),
            resolve(`${tmpUploadFolder}/${folder}`, file)
        )

        return `${tmpUploadFolder}/${folder}/${file}`
    }

    async delete(folder: string, file: string): Promise<void> {
        const filename = resolve(`${tmpUploadFolder}/${folder}`, file)

        try {
            await fs.promises.stat(filename)

        } catch {
            return

        }
        await fs.promises.unlink(filename)
    }
}

export { LocalStorageProvider }