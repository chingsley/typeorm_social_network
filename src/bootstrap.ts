import { getRepository } from "typeorm";
import { User } from "./entity/User";

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: "Alex",
    lastName: "Brooks",
    age: 22,
  });
  await userRepo.save(user).catch((err) => {
    console.log("error: ", err);
  });
  console.log("new user saved: ", user);
};
