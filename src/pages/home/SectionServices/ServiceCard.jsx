export const ServiceCard = ({ img, text }) => {
  const path = img[Object.keys(img)[0]];
  return (
    <div className="serviceCard">
      <img src={path} alt={text} />
      <h5>{text}</h5>
    </div>
  );
};
