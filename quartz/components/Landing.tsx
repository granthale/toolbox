import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import RecentNotes from "./RecentNotes"
import { SimpleSlug } from "../util/path"
import Search from "./Search"

export const TOTAL_CARDS = 5
export const CARDS = {
  tools_for_thought: (
    <a href={"Plots/tools-for-thought"} class="card card-1">
      <p class="card-title">Tools for Thought</p>
    </a>
  ),
  tech_history: (
    <a href={"Plots/tech-history"} class="card card-2">
      <p class="card-title">Internet & Computer History</p>
    </a>
  ),
  payment_systems: (
    <a href={"Plots/payments"} class="card card-3">
      <p class="card-title">Payments</p>
    </a>
  ),
  energy: (
    <a href={"Plots/climate-n-energy"} class="card card-4">
      <p class="card-title">Climate & Energy</p>
    </a>
  ),
  soil: (
    <a href={"Soil"} class="card card-soil">
      <p className="card-title">Soil</p>
      <p className="card-subhead">Experimental garden bed</p>
    </a>
  ),
}

const RecentPiecesComponent = RecentNotes({
  title: "Recent Pieces",
  limit: 4,
  filter: (f) =>
    f.slug!.startsWith("Pieces/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
  linkToMore: "Pieces/" as SimpleSlug,
})
const RecentNotesComponent = RecentNotes({
  title: "Recent Notes",
  limit: 2,
  filter: (f) => f.slug!.startsWith("Notes/") && !f.frontmatter?.noindex,
  linkToMore: "Notes/" as SimpleSlug,
})

export default (() => {
  function LandingComponent(componentData: QuartzComponentProps) {
    const SearchComponent = Search()
    // const DarkmodeComponent = Darkmode()
    return (
      <>
        <div class="landing">
          <div class="content-container">
            <div class="navbar" style="margin-top:0">
              <a href="/" class="page-title">
                <img
                  height="240px"
                  src="static/tree-arch.png"
                  alt="seed"
                  style="margin-bottom: -55px;"
                />
              </a>
              <SearchComponent {...componentData} />
            </div>
            <div class="landing-header">Hello, welcome to a garden.</div>
            <p class="page-subhead">
              Explore our web of living ideas and check out the <a href="/about">about section</a>{" "}
              to learn more.
            </p>
            <div class="flexer">
              <div class="recent-notes">
                <br />
                <RecentPiecesComponent {...componentData} />
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
      </>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor
