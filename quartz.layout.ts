import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      Placeholder: "https://www.wikipedia.org/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.DesktopOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.Graph()),
  ],
  right: [Component.Search(), Component.Graph(), Component.DesktopOnly(Component.Backlinks())],
}
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
  ],
  right: [],
}
