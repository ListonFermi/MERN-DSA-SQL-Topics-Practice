// 24-04-2024, Wednesday

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

// Aggregate Operation: Calculate the average age of all documents in the collection.
// CRUD Operations with Conditions:
// Create: Insert a new document with specific attributes.
// Read: Retrieve documents where age is greater than 25.
// Update: Update the company title of a specific document.
// Delete: Remove documents where the favorite fruit is "banana".
// Aggregation Operation with Grouping:
// Group documents by eye color and count the number of documents in each group.
// Aggregation Operation with Projection:
// Project only the name and age fields of documents.
// Aggregation Operation with Sorting:
// Sort documents by age in descending order.
// Aggregation Operation with Limit:
// Limit the result to 5 documents.
