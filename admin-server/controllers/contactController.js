import Contact from "../models/Contact.js";

export const getMessages = async (req, res) => {
  const msgs = await Contact.find();
  res.json(msgs);
};
