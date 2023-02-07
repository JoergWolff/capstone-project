import { getAllBooks, createBook } from "@/helpers/database/database";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const books = await getAllBooks();
      response.status(200).json(books);
      break;
    }
    case "POST": {
      const book = JSON.parse(request.body);
      const createdBook = await createBook(book);
      response.status(201).json(createdBook);
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET,POST")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
