import {
  deleteBook,
  getBookById,
  updateBook,
} from "@/helpers/database/database";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const book = await getBookById(request.query.id);
      if (!book) {
        response.status(404).json({
          message: `Book ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(book);
      }
      break;
    }
    case "PATCH": {
      const book = JSON.parse(request.body);
      const updatedBook = await updateBook(request.query.id, book);
      if (!updatedBook) {
        response.status(404).json({
          message: `Book ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(updatedBook);
      }
      break;
    }
    case "DELETE": {
      const deletedBook = await deleteBook(request.query.id);
      if (!deletedBook) {
        response.status(404).json({
          message: `Book ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(deletedBook);
      }
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET,PATCH,DELETE")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
