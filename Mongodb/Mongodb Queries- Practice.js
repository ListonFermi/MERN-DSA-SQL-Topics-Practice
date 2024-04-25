//---------------------------------------------- 24-04-2024, Wednesday-----------------------------------------------//

// Create a db, collection and add an doc to it
/* use dw   */

//used people database for further queries

// Create Operation: Insert a new document into the collection.

db.employee.insertOne({
  name: "Liston",
  role: "developer",
  age: 25,
  salary: 100000,
  skills: ["node", "react", "mongodb", "sql", "javascript"],
});

// Update Operation: Update the age of a specific document.
db.people.updateOne({ name: "Mable Pratt" }, { $set: { age: 33 } });

// Delete Operation: Remove a document from the collection.
db.people.deleteOne({ name: "Mable Pratt" });

//---------------------------------------------- 25-04-2024, Thursday-----------------------------------------------//

// Aggregate Operation: Calculate the average age of all documents in the collection.

db.people.aggregate({ $group: { _id: null, avg_age: { $avg: "$age" } } });

// Read: Retrieve documents where age is greater than 25.

db.people.find({ age: { $gt: 25, $lt: 35 } });

// Delete: Remove documents where the favorite fruit is "banana".

db.people.deleteMany({ favoriteFruit: "banana" });

// Group documents by eye color and count the number of documents in each group.

db.people.aggregate([{ $group: { _id: "$eyeColor", count: { $sum: 1 } } }]);

// Project only the name and age fields of documents.

db.people.aggregate({ $project: { name: true, age: true, _id: false } });

// Aggregation Operation with Sorting:
// Sort documents by age in descending order.

db.people.aggregate([
  { $sort: { age: -1 } },
  { $project: { name: true, age: true, _id: false } },
]);

// Aggregation Operation with Limit:
// Limit the result to 5 documents.

db.people.aggregate([
  { $limit: 5 },
  { $project: { name: true, age: true, _id: false } },
]);

/*

From ChatGPT:

Certainly! Here are some queries related to the provided collection:

1. Retrieve all documents from the collection.
2. Find all documents where the `isActive` field is `true`.
3. Find all documents where the `age` field is greater than or equal to 30.
4. Find all documents where the `favoriteFruit` field is "banana" and the `gender` field is "male".
5. Find all documents where the `tags` array contains the value "veniam".
6. Find all documents where the `registered` date is after January 1, 2016.
7. Find all documents where the `eyeColor` field is either "green" or "blue".
8. Find all documents where the `company.title` field is "DIGITALUS".
9. Find all documents where the `name` field starts with the letter "A".
10. Find all documents where the `age` field is greater than 25 and the `gender` field is "female".
11. Find all documents sorted by the `age` field in ascending order.

These queries cover various aspects of querying documents from the provided collection,
 including filtering based on field values,
 array elements, date ranges, and sorting results.

*/

// 1. Retrieve all documents from the collection.
// 2. Find all documents where the `isActive` field is `true`.
// 3. Find all documents where the `age` field is greater than or equal to 30.

db.people.find({ age: { $gt: 30 } });

// 4. Find all documents where the `favoriteFruit` field is "banana" and the `gender` field is "male".

db.people.aggregate([
  { $match: { favoriteFruit: "banana", gender: "male" } },
  { $project: { name: true, _id: false, favoriteFruit: true, gender: true } },
]);

// 5. Find all documents where the `tags` array contains the value "veniam".

db.people.aggregate({ $match: { tags: "veniam" } });

// 6. Find all documents where the `registered` date is after January 1, 2016.

// 7. Find all documents where the `eyeColor` field is either "green" or "blue".

db.people.aggregate(
  { $match: { eyeColor: { $in: ["green", "blue"] } } },
  { $project: { name: true, _id: false, eyeColor: true } }
);

// 8. Find all documents where the `company.title` field is "DIGITALUS".

db.people.find({ "company.title": "DIGITALUS" });

// 9. Find all documents where the `name` field starts with the letter "A".

db.people.find({ name: { $regex: /^A/ } });

// 10. Find all documents where the `age` field is greater than 25 and the `gender` field is "female".

db.people.aggregate([
  { $match: { age: { $gt: 25 }, gender: "female" } },
  { $project: { name: true, _id: false } },
]);

// 11. Find all documents sorted by the `age` field in ascending order.

db.people.aggregate([
  { $sort: { age: 1 } },
  { $project: { name: true, age: true, _id: false } },
]);
