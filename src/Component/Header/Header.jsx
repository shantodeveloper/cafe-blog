import logo from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className="flex justify-between mb-20">
      <h1 className="text-5xl font-extrabold">Tawhid Blogs</h1>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
