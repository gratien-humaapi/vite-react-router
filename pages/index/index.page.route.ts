// export default "/";

import { resolveRoute } from 'vite-plugin-ssr/routing'

export default (pageContext: {
    isClientSideNavigation: boolean, urlPathname: string,
}) => {
    console.log(pageContext.urlPathname);

    if (pageContext.urlPathname === '/') {
        return { routeParams: {} }
    }

    const result = resolveRoute('/images/@id', pageContext.urlPathname)
    console.log(result.match);
    if (result.match) {
        return { routeParams: { view: "modal", id: result.routeParams.id } }
    } 

    return { routeParams: {} }

}