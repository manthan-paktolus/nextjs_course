import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://manthan:manthan@cluster0.wjik7tc.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}
