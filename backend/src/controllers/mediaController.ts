import { Request, Response } from "express";
import prisma from "../config/database";
import { Media, mediaSchema } from "../validation/mediaValidators";
import { Prisma } from "@prisma/client";
class MediaController {
  // Create new media
  async addMedia(req: Request, res: Response) {
    const result = mediaSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.issues });
    }
    try {
      const media = await prisma.media.create({
        data: result.data as Media & Prisma.MediaCreateInput,
      });
      res.status(201).json(media);
    } catch (error) {
      res.status(500).json({ error: "Failed to create media" });
    }
  }

  async getAllMedia(req: Request, res: Response) {
    try {
      const skip = Number(req.query.skip) || 0;
      const take = Number(req.query.take) || 30;
      const mediaList = await prisma.media.findMany({
        skip,
        take,
        orderBy: { id: "asc" },
      });
      res.status(200).json(mediaList || []);
    } catch (error) {
      res.status(500).json({ message: "failed to fetch media" });
    }
  }

  async updateMedia(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const media = await prisma.media.update({
        where: { id: Number(id) },
        data: req.body,
      });
      if (!media) {
        return res.status(404).json({ message: "Media not found" });
      }
      res.status(200).json(media);
    } catch (error) {
      res.status(400).json({ message: "Failed to update media", error });
    }
  }

  async deleteMedia(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const media = await prisma.media.findUnique({
        where: { id: Number(id) },
      });
      if (!media) {
        return res.status(404).json({ message: "Media not found" });
      }
      await prisma.media.delete({ where: { id: Number(id) } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete media" });
    }
  }
  async logIn(req: Request, res: Response) {
    const { username, password } = req.body;

    // Fixed credentials
    const fixedUsername = "admin";
    const fixedPassword = "123456";

    if (username === fixedUsername && password === fixedPassword) {
      return res.status(200).json({ token: "demo-token" });
    }
    return res.status(401).json({ message: "Invalid credentials" });
  }
}

export default new MediaController();
