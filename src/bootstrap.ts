import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { Tweet } from "./entity/Tweet";

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

  const tweetRepo = getRepository(Tweet);
  const tweet = new Tweet();
  tweet.title = "I finaaly got a new job!";
  tweet.content = "Sed ut perspiciatis unde omnis iste natus error.";
  tweet.user = user;
  await tweetRepo.save(tweet).catch((err) => console.log(err));
};
