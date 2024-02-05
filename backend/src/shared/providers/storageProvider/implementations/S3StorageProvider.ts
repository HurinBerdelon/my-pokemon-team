import * as AWS from "@aws-sdk/client-s3";
import fs from "fs";
import { IStorageProvider } from "../IStorageProvider";
import mime from "mime";
import { resolve } from "path";
import { tmpUploadFolder } from "../../../../config/tmpUploadFolder";

export class S3StorageProvider implements IStorageProvider {
  private client: AWS.S3;

  constructor() {
    this.client = new AWS.S3({
      region: process.env.AWS_BUCKET_REGION,
    });
  }

  async save(folder: string, file: string): Promise<string> {
    const originalName = resolve(tmpUploadFolder, file);

    const fileContent = await fs.promises.readFile(originalName);

    const ContentType = mime.getType(originalName);

    await this.client.putObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: file,
      ACL: "public-read",
      Body: fileContent,
      ContentType,
    });

    await fs.promises.unlink(originalName);

    const imageURL = `${process.env.AWS_BUCKET_URL}/${folder}/${file}`;

    return imageURL;
  }

  async delete(folder: string, file: string): Promise<void> {
    await this.client.deleteObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: file,
    });
  }
}
