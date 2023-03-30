import axios from "axios";
import parser from "node-html-parser";
import { Request, Response } from "express";

export const getVideoLink = async(req: Request, res: Response) => {
  try {
    let url = req.body.url;
    url = url + "embed/captioned";

    let link = "";

    let response = await axios.get(url);
    if (response) {
      const root = parser(response.data);
      link = root.querySelector("video").getAttribute("src");
      console.log(link)
      res.send(link);
    } else throw new Error("something went wrong");
  } catch (err) {
    res.send(err.message);
  }
};

export const getPostLink = async (req: Request, res: Response) => {
  try {
    let url = req.body.url;
    url = url + "embed/captioned";

    let link = "";

    let response = await axios.get(url);
    if (response) {
      const root = parser(response.data);
      link = root.querySelector("img.EmbeddedMediaImage").getAttribute("src");
      res.send(link);
    } else throw new Error("something went wrong");
  } catch (err) {
    res.send(err.message);
  }
};
