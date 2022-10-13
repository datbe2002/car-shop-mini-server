const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const carRoute = require("./routes/car");
dotenv.config();

// const cars = [
//   {
//     id: 1,
//     Name: "Lamborghini Aventador SVJ 63",
//     Year: "2011",
//     Description:
//       "The Aventador SVJ 63, a special edition commemorating the company's year of foundation (1963), featuring a special white livery with the number 63 more prominent on the car would be first offered for sale and limited to just 63 units.",
//     Image:
//       "https://tapchisieuxe.com/wp-content/uploads/2022/04/273498219-4844437865592284-1839386853368753374-n-39fb.jpg",
//     Price: "20000",
//   },
//   {
//     id: 2,
//     Name: "Lamborghini Aventador LP 700-4",
//     Year: "2013",
//     Description:
//       "The Aventador LP 700-4 Roadster was announced for production on 27 December 2012. Equipped with the same V12 engine as the coupé version, Lamborghini claims that it can accelerate from 0 to 97 km/h  in 2.9 seconds and will achieve a top Price of 400km km/h (217 mph).[28]",
//     Image:
//       "https://www.alainclass.com/wp-content/uploads/2021/06/2013-Lamborghini-Aventador-LP-700-4-YELLOW-1567-3.jpg",
//     Price: "14000",
//   },
//   {
//     id: 3,
//     Name: "Ferrari Omologata",
//     Year: "2020",
//     Description:
//       "Design by Ferrari Design Center team in Maranello directed by Flavio Manzoni[54]",
//     Image:
//       "https://www.piston.my/wp-content/uploads/2020/09/Ferrari-812-Superfast.jpg",
//     Price: "30000",
//   },
//   {
//     id: 4,
//     Name: "Ferrari SP3JC",
//     Year: "2018",
//     Description:
//       "Designed by the Ferrari Styling Centre. Two matching cars ordered, one in LHD, the other in RHD with different liveries.[53] Took 3.5 years to complete. Presented in 2018.",
//     Image:
//       "https://www.carscoops.com/wp-content/uploads/2018/11/7a5ac8a9-ferrari-sp3jc--1024x555.jpg",
//     Price: "10000",
//   },
//   {
//     id: 5,
//     Name: "Audi R8 V10",
//     Year: "2007",
//     Description:
//       "The Audi R8 is a mid-engine, 2-seater sports car,[2][3] which uses Audi's trademark quattro permanent all-wheel drive system.[2] It was introduced by the German car manufacturer Audi AG in 2006.",
//     Image:
//       "https://xehay.vn/uploads/images/2018/10/03/xehay-audi-r8-v10-plus-coupe-competition-181018-1.jpg",
//     Price: "40000",
//   },
//   {
//     id: 6,
//     Name: "Audi R8 5.2 FSI coupé",
//     Year: "2015",
//     Description:
//       "The second generation of the R8 (model code: Type 4S) was unveiled at the 2015 Geneva Motor Show and is based on the Modular Sports System platform shared with the Lamborghini Huracan. The development of the Type 4S commenced in late 2013.",
//     Image:
//       "https://hips.hearstapps.com/roa.h-cdn.co/assets/15/29/1436791775-r8lead1.jpg",
//     Price: "30000",
//   },
//   {
//     id: 7,
//     Name: "Rolls-Royce Cullinan",
//     Year: "2018",
//     Description:
//       "After much anticipation, Rolls-Royce revealed the Cullinan in early 2018. The 5-door SUV shares the Architecture of Luxury platform and many components with the Phantom.",
//     Image:
//       "https://muaxegiatot.vn/wp-content/uploads/2021/01/gia-xe-rolls-royce-cullinan-5-cho-2021-muaxegiatot-vn.jpg",
//     Price: "60000",
//   },
//   {
//     id: 8,
//     Name: "Rolls-Royce Wraith",
//     Year: "2013",
//     Description:
//       "From 2013 Wraith coupé. Rolls-Royce Motor Cars launched a new car at the Geneva Motor Show on 5 March 2013.[13] The new car, named the Rolls-Royce Wraith (in honour of the original Wraith built by the original Rolls-Royce ).",
//     Image:
//       "https://bizweb.dktcdn.net/100/134/646/products/3-53228ee5-8f63-4d9a-a8ff-9c39d1bc28e7.jpg?v=1632709457813",
//     Price: "70000",
//   },
//   {
//     id: 9,
//     Name: "Bentley Continental Flying Spur",
//     Year: "2020",
//     Description:
//       "The prefix was omitted; according to Bentley's designers, this was a conscious attempt to take the Flying Spur in a more opulent direction and distance it from the more driver-oriented, two-door Continental GT range.",
//     Image:
//       "https://www.topgear.com/sites/default/files/images/cars-road-test/2021/01/d9649cda62b3c7192fe214eab006d5e1/rp_-_flying_spur_v8-49.jpg",
//     Price: "50000",
//   },
//   {
//     id: 10,
//     Name: "Bentley Mulsanne",
//     Year: "2020",
//     Description:
//       "Due to the increasingly stringent emission regulations, the Mulsanne was discontinued in 2020. Bentley unveiled the final edition of the Mulsanne which is limited to 30 units.",
//     Image: "https://autogen.pl/cars/BentMulSpeed/1.jpg",
//     Price: "40000",
//   },
// ];

mongoose.connect(process.env.DATABASE_URI, () => {
  console.log("Connected to MongoDB...");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// app.get("/v1/cars", (req, res) => {
//   res.status(200).json(cars);
// });
app.use("/v1/api", carRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
