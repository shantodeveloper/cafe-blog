import PropTypes from 'prop-types';
import img from '../../assets/images/boy1.png';

const Blog = ({ blog }) => {
  const { cover_img, title, author, posted_date, reading_time, hashtag } = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-10" src={cover_img} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-5 ">
          <img className="w-16 mb-6" src={img} alt="" />

          <div>
            <h2 className="font-extrabold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <h1>{reading_time} read min</h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="text-blue-700">
        {hashtag.map((has, idx) => (
          <li key={idx}>{has}</li>
        ))}
      </p>

      <a className="text-blue-950 font-bold" href="#">
        Mark is read
      </a>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
