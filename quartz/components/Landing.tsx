import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import RecentNotes from "./RecentNotes"
import { SimpleSlug } from "../util/path"

export const TOTAL_CARDS = 5
export const CARDS = {
  tools_for_thought: (
    <a href={"Acres/tools-for-thought"} class="card card-1">
      <p class="card-title">Tools for Thought</p>
    </a>
  ),
  tech_history: (
    <a href={"Acres/tech-history"} class="card card-2">
      <p class="card-title">Internet & Computer History</p>
    </a>
  ),
  economics: (
    <a href={"Acres/economics"} class="card card-3">
      <p class="card-title">Economics</p>
    </a>
  ),
  energy: (
    <a href={"Acres/energy"} class="card card-4">
      <p class="card-title">Energy</p>
    </a>
  ),
  soil: (
    <a href={"/Soil"} class="card card-soil">
      <p className="card-title">Soil</p>
    </a>
  ),
}

const RecentWritingComponent = RecentNotes({
  title: "Recent Writing",
  limit: 4,
  filter: (f) =>
    f.slug!.startsWith("Writing/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
  linkToMore: "Writing/" as SimpleSlug,
})
const RecentNotesComponent = RecentNotes({
  title: "Recent Notes",
  limit: 2,
  filter: (f) => f.slug!.startsWith("Notes/") && !f.frontmatter?.noindex,
  linkToMore: "Notes/" as SimpleSlug,
})

export default (() => {
  function LandingComponent(componentData: QuartzComponentProps) {
    return (
      <div class="landing">
        <div class="content-container">
          <div class="landing-header">Hello, welcome to our garden.</div>
          <p class="page-subhead">
            Check the <a href="/about">about section</a> to learn more.
          </p>
          <div class="flexer">
            <div class="recent-notes">
              <br />
              <RecentWritingComponent {...componentData} />
              <RecentNotesComponent {...componentData} />
            </div>
            <div class="issue-container">
              {Object.values(CARDS)}
              {/* {Array(TOTAL_CARDS - Object.keys(CARDS).length)
                .fill(0)
                .map(() => (
                  <div class="card card-coming">
                    <p class="card-title">Coming Soon</p>
                  </div>
                ))} */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
