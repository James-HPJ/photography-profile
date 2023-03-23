import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, date, event, details, checkBox } = req.body;

    if (
      name.trim().length === 0 ||
      !email.includes("@") ||
      date.trim().length === 0 ||
      event.trim().length === 0
    ) {
      res.json({
        message: "One or several of the input fields are invalid",
        error: true,
      });
      return;
    }

    const newCustomerRequest = req.body;

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bnaxbue.mongodb.net/photo-portfolio?retryWrites=true&w=majority`
      );
    } catch (error) {
      throw new Error(error);
    }

    const db = client.db();

    try {
      const result = await db
        .collection("customer-details")
        .insertOne(newCustomerRequest);
    } catch (error) {
      throw new Error(error);
    }

    client.close();
    res.json({
      message: "Your details have been forwarded to us!",
      error: false,
    });
  }
};

export default handler;
