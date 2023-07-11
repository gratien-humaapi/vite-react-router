import { CardImage } from "../../components/cardImage";
import { usePageContext } from "../../renderer/usePageContext";
import { MyModal } from "./modal/modal";
import { navigate } from "vite-plugin-ssr/client/router";

const Page = (pageProps: { images: { id: string; urlImage: string }[] }) => {
  const { images } = pageProps;
  const pageContext = usePageContext();
  const { view } = pageContext.routeParams;

  const handleImageClick = (id: string) => {
    navigate(`/images/${id}`);
  };

  const onCloseModal = () => {
    navigate("/");
  };

  console.log(pageContext.urlPathname);

  return (
    <>
      <div
        style={{
          width: "100%",
          position: "relative",
          // WebkitFlexDirection:'row',
          WebkitColumnCount: 3,
          MozColumnCount: 3,
          columnCount: 3,
          WebkitColumnWidth: "33%",
          MozColumnWidth: "33%",
          columnWidth: "33%",
          overflow: "hidden",
        }}
      >
        {pageProps.images.map((image, index) => (
          <div
            key={index}
            style={{
              padding: "8px 0 0 0",
              marginRight: "8px",
              marginBottom: "8px",
            }}
          >
            <CardImage
              key={index}
              id=""
              onClick={() => handleImageClick(image.id)}
              urlImage={image.urlImage}
            />
          </div>
        ))}
      </div>

      {view && <MyModal  />}
    </>
  );
};
export { Page };
