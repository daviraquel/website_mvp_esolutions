import { TechContainer } from "./TechSection.styled";

export const TechSection = ({
  img,
  alt,
  title,
  spanText,
  contentText,
  link,
}) => {
  return (
    <section>
      <TechContainer>
        <div className="techText">
          <h2>
            {title} <span>{spanText}</span>
          </h2>
          <p>{contentText}</p>
          <a href={link}>Saiba mais</a>
        </div>
        <div className="techImg">
          <img src={img} alt={alt} />
        </div>
      </TechContainer>
    </section>
  );
};
