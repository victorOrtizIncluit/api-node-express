module.exports = ({ v4 }) => ({
  get: (req, res) => {
    res.send(v4());
  },
  post: (req, res) => {
   res.send('esto es un post');
 },
 update: (req, res) => {
   res.send(v4());
 },
 delete: (req, res) => {
   res.send(v4());
 },
});
