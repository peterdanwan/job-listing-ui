// A wrapping component that:
// -----------------------------------
// 1. wraps around different children (could be a paragraph, h2, whatever.)
// 2. accepts a bg prop for styling its background colour
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
export default Card;
