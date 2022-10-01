

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.send("https://vimeo.com/755640508");
      break;
    default:
      return res.send('default null')
  }
};