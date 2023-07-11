import {
  Box,
  Group,
  Button,
  Menu,
  ActionIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconArrowsRightLeft,
  IconChevronDown,
  IconX,
} from "@tabler/icons-react";
import { UserButton } from "./user_avatar";
import { Image } from "@unpic/react";
import { FC, useState } from "react";

interface IModalContent {
  currentImage: { id: string, urlImage: string};
  onClose?: VoidFunction;
}

const ImagePreview: FC<IModalContent> = (props) => {
  const { currentImage, onClose } = props;

  // console.log(currentImage.urlImage);

  return (
    <Box
      // mx={70}
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "calc((100vh - 100px))",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Group
        style={{
          width: "100%",
          display: "flex",
          justifyContent:'space-between',
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <Box>
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Harriette Spoonlicker"
            email="hspoonlicker@outlook.com"
          />
        </Box>
          {onClose && (
            <ActionIcon
              radius="xl"
              variant="outline"
              color="gray"
              onClick={onClose}
            >
              <IconX size="1.125rem" />
            </ActionIcon>
          )}
      </Group>

      <Box
        style={{
          width: "100%",
          // height: "calc(100vh - 100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={currentImage.urlImage}
          style={{
            borderRadius: "14px",
            height: "calc(100vh - 250px)",
          }}
          layout="fullWidth"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};
export { ImagePreview };
