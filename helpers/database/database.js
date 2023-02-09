import mongoose, { model, models, Schema } from "mongoose";
import { v4 } from "uuid";

mongoose.set("strictQuery", true);

const URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PSWD}@cluster0.jkgo6ys.mongodb.net/mediadb?retryWrites=true&w=majority`;

const bookSchema = new Schema({
  id: String,
  timestamp: Number,
  internalId: String,
  author: String,
  olAuthorId: String,
  title: String,
  olTitleId: String,
  subtitle: String,
  coverImg: String,
  olCoverId: String,
  isbn10: String,
  teaser: String,
  type: String,
  isFavorite: Boolean,
  isActive: Boolean,
});

const counterSchema = new Schema({
  type: String,
  value: Number,
});

const Book = models.Book || model("Book", bookSchema);
const Counter = models.Counter || model("Counter", counterSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

export async function getAllBooks() {
  await connectDatabase();
  const books = await Book.find({});
  return books;
}

export async function getBookById(id) {
  await connectDatabase();
  const book = await Book.findOne({
    id,
  });
  return book;
}

export async function updateBook(id, book) {
  await connectDatabase();
  await Book.updateOne({ id }, book);
  const updatedBook = getBookById(id);
  return updatedBook;
}

export async function deleteBook(id) {
  await connectDatabase();
  const deletedBook = getBookById(id);
  await Book.deleteOne({
    id,
  });
  return deletedBook;
}

export async function createBook(book) {
  await connectDatabase();
  const createdBook = await Book.create({
    ...book,
    id: v4(),
    timestamp: Date.now(),
    olAuthorId: "",
    olTitleId: "",
    olCoverId: "",
    isbn10: "",
    type: "book",
    isFavorite: false,
    isActive: true,
  });
  return createdBook;
}

export async function getCounterByType(type) {
  await connectDatabase();
  const counter = await Counter.findOne({
    type,
  });
  return counter;
}

export async function updateCounter(type, value) {
  await connectDatabase();
  await Counter.updateOne({ type }, value);
  const updatedCounter = getCounterByType(type);
  return updatedCounter;
}
