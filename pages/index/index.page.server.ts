

export { onBeforeRender }

import { PageContext } from '../../renderer/types'
import { images } from '../fake-data'

async function onBeforeRender(pageContext: PageContext) {

  return {
    pageContext: {
      pageProps: {
        images: images
      },
      
    }
  }
}