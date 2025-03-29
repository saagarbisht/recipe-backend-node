export function responce(res, statusCode, message, data = null, error = null, successful = false) {
  return res.status(statusCode).json({ message, data, error, successful })
}