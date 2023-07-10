module.exports = (err, req, res, next) => {
  switch (err.message) {
    case 'invalid_body':
    case 'invalid_params':
      res.status(422).send(err.message);
      break;
    case 'employee_not_found':
      res.status(404).send(err.message);
      break;
    default:
      res.status(500).send('server_error');
  }
};
