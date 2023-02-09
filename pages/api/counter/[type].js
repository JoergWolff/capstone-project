import { getCounterByType, updateCounter } from "@/helpers/database/database";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const counter = await getCounterByType(request.query.type);
      if (!counter) {
        response.status(404).json({
          message: `Counter type ${request.query.type} was not found.`,
        });
      } else {
        response.status(200).json(counter);
      }
      break;
    }
    case "PATCH": {
      const counter = JSON.parse(request.body);
      const updatedCounter = await updateCounter(request.query.type, counter);
      if (!updatedCounter) {
        response.status(404).json({
          message: `Counter type ${request.query.type} was not found.`,
        });
      } else {
        response.status(200).json(updatedCounter);
      }
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET,PATCH")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
