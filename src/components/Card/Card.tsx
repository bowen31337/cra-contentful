import { CardProps, CardStyled } from "./";

const CardItem = (props: CardProps) => {
  const { url, title, address } = props;

  return (
    <CardStyled>
      <figure>
        <img src={url} alt={title} />
      </figure>
      <section>
        <h4>{title}</h4>
        <p>{address}</p>
      </section>
    </CardStyled>
  );
};

export default CardItem;
