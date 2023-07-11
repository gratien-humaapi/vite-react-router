import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";

import { PageContextServer } from "../../renderer/types";
import { images } from "../fake-data";


const onBeforeRender = async (pageContext: PageContextServer) => {

  const { id } = pageContext.routeParams;

  console.log({ id });



  const image = images.find((value) => value.id === id);

  console.log({ image });

  return {
    pageContext: {
      pageProps: {
        image
      }
    },

  };

};

export { onBeforeRender };

