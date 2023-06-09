import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Galen",
    lastName: "Lalor",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    phoneNumber: 43416727,
    animalAge: 2,
    animalName: "Possum",
    animalBreed: "Cat",
    animalGender: "Female",
    location: "Munno Para, 5115",
    occupation: "Programmer Analyst",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Wayne",
    lastName: "Amos",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    phoneNumber: 41445174,
    animalAge: 1,
    animalName: "Sparky",
    animalBreed: "Rottweiler",
    animalGender: "Male",
    location: "Edinburgh, 5111",
    occupation: "Retail",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Theresa",
    lastName: "Hull",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    phoneNumber: 401746175,
    animalAge: 3,
    animalName: "Spike",
    animalBreed: "Labrador Retriever",
    animalGender: "Male",
    location: "Greenfields, 5107",
    occupation: "Lawyer",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Ralph",
    lastName: "Jarvis",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    phoneNumber: 401722344,
    animalAge: 5,
    animalName: "Suki",
    animalBreed: "Border Collie",
    animalGender: "Female",
    location: "Gulfview Heights, 5096",
    occupation: "Teacher",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Marie",
    lastName: "Jamieson",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    phoneNumber: 401675543,
    animalAge: 1,
    animalName: "Boots",
    animalBreed: "Orange Tabby",
    animalGender: "Female",
    location: "Ingle Farm, 5098",
    occupation: "Train Driver",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Frank",
    lastName: "Casey",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    phoneNumber: 401573422,
    animalAge: 2,
    animalName: "Tarzan",
    animalBreed: "Staffordshire Bull Terrier",
    animalGender: "Female",
    location: "Mawson Lakes, 5095",
    occupation: "Baker",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Rachel",
    lastName: "Rice",
    email: "rachelricel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    phoneNumber: 427344352,
    animalAge: 5,
    animalName: "Trigger",
    animalBreed: "Pug",
    animalGender: "Female",
    location: "Parafield, 5106",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Raymond",
    lastName: "Golding",
    email: "raymondgolding@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    phoneNumber: 450164376,
    animalAge: 1,
    animalName: "Winston",
    animalBreed: "Poodle",
    animalGender: "Male",
    location: "Parafield Gardens, 5107",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Wayne",
    lastName: "Amos",
    location: "Edinburgh, 5111",
    description: "Sparky getting a wash!",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Ralph",
    lastName: "Jarvis",
    location: "Gulfview Heights, 5096",
    description: "She really likes to play in the mud.",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
];
