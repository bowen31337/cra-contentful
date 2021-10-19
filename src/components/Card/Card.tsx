import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardProps, CardStyled } from "./";

const CardItem = (props: CardProps) => {
  const { id, url, title, description } = props;

  return (
    <CardStyled>
      <Card id={id}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={url} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardStyled>
  );
};

export default CardItem;
