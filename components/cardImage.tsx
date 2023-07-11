import { Box } from "@mantine/core";
import { Image } from "@unpic/react";
import { FC } from "react";

interface IImage {
  id: string;
  urlImage: string;
  name?: string;
  title?: string;
  tag?: string;
  location?: string;
  device?: string;
  createdAt?: string;
  updatedAt?: string;
  onClick: VoidFunction;
}
const CardImage: FC<IImage> = (props) => {
  const { urlImage, title, onClick } = props;
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
      }}
    >
      <Image
        onClick={onClick}
        style={{
          borderRadius: "14px",
          width: "100%",
          cursor: "pointer",
          //  height: "auto",
        }}
        src={urlImage}
        background="auto"
        objectFit="cover"
        layout="fullWidth"
        priority
        loading="lazy"
        alt={title}
      />
    </Box>
  );
};
export { CardImage };

