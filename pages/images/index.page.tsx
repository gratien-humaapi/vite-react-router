import { ImagePreview } from "../../components/modal-content";

export { Page };

const Page = (pageProps: { image: { id: string; urlImage: string } }) => {
  const { image } = pageProps;

  return (
    <>
      <ImagePreview currentImage={image} />
    </>
  );
};
