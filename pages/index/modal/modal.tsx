import { Modal, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import { usePageContext } from "../../../renderer/usePageContext";
import { images } from "../../fake-data";
import { ImagePreview } from "../../../components/modal-content";

export { MyModal };

const defaultData = {
  id: "",
  urlImage: "",
};

// const MyModal = () => {
const MyModal = () => {
  // const { isOpen, onClose, id} = props;
  const [opened, { open, close }] = useDisclosure(true);
  const [image, setImage] = useState(defaultData);
  const pageContext = usePageContext();
  const { id } = pageContext.routeParams;
  console.log({ id });

  useEffect(() => {
    const data = images.find((value) => value.id === id);
    data && setImage(data);
  }, []);

  const closeModal = () => {
    close();
    navigate("/");
  };

  return (
    <Modal
      withCloseButton={false}
      opened={opened}
      onClose={closeModal}
      centered
      scrollAreaComponent={ScrollArea.Autosize}
      size="80%"
      radius={20}
      overlayProps={{
        color: "white",
        opacity: 0.55,
        blur: 3,
      }}
      transitionProps={{ transition: "fade", duration: 100 }}
    >
      <ImagePreview currentImage={image} onClose={closeModal} />
    </Modal>
  );
};
