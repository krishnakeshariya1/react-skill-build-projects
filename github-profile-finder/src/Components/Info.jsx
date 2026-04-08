import { ActivityOverview } from "./ActionOverview"
import { ContributionGraph } from "./ContributionGraph"
import { PinnedSection } from "./PinnedSection"

export const Info = () =>{
    return(
        <div className="w-2/3 px-2 h-auto flex  flex-col gap-10">

            < PinnedSection />
            < ContributionGraph />
            < ActivityOverview />
        </div>
    )
}