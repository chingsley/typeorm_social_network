import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Bootstrap, find } from "./bootstrap";

createConnection()
  .then(async (connection) => {
    await Bootstrap().catch((err) => {
      console.log(err);
    });

    await find().catch((err) => {
      console.log(err);
    });
  })
  .catch((error) => console.log(error));
