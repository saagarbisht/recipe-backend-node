import { connect } from "mongoose";

export default function dbConnect() {
  connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => {
      console.log("db connection successfull");
    })
    .catch((err) => {
      console.log("unable to connect to db");
      console.log(err)
    });
}
