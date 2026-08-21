import type { LocalAreaProfile, LocalResearchSource } from "../localAreaContent";

const HOUSING: LocalResearchSource = {
  label: "Milton Keynes City Council — housing statistics",
  url: "https://www.milton-keynes.gov.uk/your-council-and-elections/statistics/housing-statistics",
};

const PRIVATE_HOUSING: LocalResearchSource = {
  label: "Milton Keynes City Council — Private Sector Housing Strategy 2021–2026",
  url: "https://www.milton-keynes.gov.uk/sites/default/files/2022-05/Private%20Sector%20Housing%20Strategy%202021-2026.pdf",
};

const HERITAGE: LocalResearchSource = {
  label: "Milton Keynes City Council — conservation and planning datasets",
  url: "https://www.milton-keynes.gov.uk/planning-and-building-control/open-digital-planning-project",
};

const TREES: LocalResearchSource = {
  label: "Milton Keynes City Council — tree protection and preservation",
  url: "https://www.milton-keynes.gov.uk/planning-and-building/planning-applications-apply-pay-and-comment/tree-protection-and-preservation",
};

const PLAN: LocalResearchSource = {
  label: "Milton Keynes City Council — Plan:MK",
  url: "https://www.milton-keynes.gov.uk/planning-and-building/developingmk/planmk",
};

export const MILTON_KEYNES_PROFILE: LocalAreaProfile = {
  city: "Milton Keynes",
  housingSummary:
    "Milton Keynes is unusual because modern new-town estates sit alongside historic towns and villages such as Bletchley, Newport Pagnell, Stony Stratford and Wolverton. Council monitoring reported 129,849 homes in the borough by September 2025, while the authority also records 27 conservation areas. That mix means the age, construction and planning context of a property can vary sharply across the city.",
  housingFacts: [
    { value: "129,849", label: "homes recorded by September 2025" },
    { value: "27", label: "conservation areas across the borough" },
    { value: "48", label: "town and parish councils or meetings" },
    { value: "1,101", label: "homes completed in the first half of 2025/26" },
  ],
  areas: ["Bletchley", "Central Milton Keynes", "Newport Pagnell", "Stony Stratford", "Woburn Sands", "Wolverton", "Shenley", "Great Linford"],
  housingSourceLabel: HOUSING.label,
  housingSourceUrl: HOUSING.url,
  areaSourceLabel: "Milton Keynes City Council — Plan:MK settlement maps",
  areaSourceUrl: PLAN.url,
  tradeContent: {
    handyman: {
      eyebrow: "Milton Keynes handyman context",
      heading: "Property age and estate layout can change a Milton Keynes handyman visit",
      intro: "Milton Keynes contains large areas of post-1960 housing as well as much older settlements. The council's private housing strategy notes that rapid new-town development created estates whose maintenance issues can become more apparent as properties age.",
      points: [
        { title: "New-town and historic properties need different assumptions", text: "A handyman working in a 1970s or 1980s estate may encounter very different wall, door and fixture details from a period property in Wolverton, Stony Stratford or one of the older villages. Describe the approximate property age where you know it." },
        { title: "Estate parking is often easier, but access still varies", text: "Milton Keynes was planned around grid roads, estates and local centres, yet individual homes can still have rear courts, shared parking or long routes from the vehicle to the door. Mention anything that affects tools, ladders or bulky furniture." },
        { title: "Several maintenance tasks are easier to price together", text: "List loose fittings, doors, shelving, flat-pack furniture, sealant and small repairs in one request. Grouping the work helps a handyman judge whether it is a short call-out or a half-day visit." },
      ],
      checklistHeading: "What to include in a Milton Keynes handyman request",
      checklistIntro: "Give a quick picture of the property, access and complete task list before the visit is priced.",
      checklist: ["Mention the property type and approximate age if known.", "List all small repairs or fitting jobs you want completed in the same visit.", "Describe parking, rear access, stairs or any long route for carrying tools and materials."],
      sources: [PRIVATE_HOUSING, HOUSING],
    },
    plumber: {
      eyebrow: "Milton Keynes plumbing context",
      heading: "Property age can be a useful clue in a Milton Keynes plumbing brief",
      intro: "Milton Keynes grew quickly during the new-town decades, while older towns and villages remain within the authority. Pipe layouts, previous alterations and access can therefore differ substantially between homes that appear similar in size.",
      points: [
        { title: "Rapid-growth housing is now maturing", text: "The council's private housing strategy says many homes were built quickly during the 1970s and 1980s and that some structural or environmental issues are becoming more apparent as properties age. For plumbing, mention previous renovations or known pipe changes where relevant." },
        { title: "Older settlements can have very different service layouts", text: "Homes in places such as Wolverton, Stony Stratford and Newport Pagnell may have older extensions, converted spaces or altered plumbing routes. Describe where the leak or fitting sits in relation to the original house and later additions." },
        { title: "Isolation and access matter more than a guessed diagnosis", text: "Say whether you can safely isolate the water, where the symptom appears and whether the issue is upstairs, in an extension or in an external service area. That gives plumbers a better first-visit picture." },
      ],
      checklistHeading: "Details that help Milton Keynes plumbers assess a job",
      checklistIntro: "Focus on what you can see, the property layout and any previous alterations you know about.",
      checklist: ["Describe the exact symptom and where it appears in the property.", "Say whether the water can be isolated and whether the issue is active or intermittent.", "Mention extensions, previous refurbishments or unusual access that could affect pipe routes."],
      sources: [PRIVATE_HOUSING, HOUSING],
    },
    electrician: {
      eyebrow: "Milton Keynes electrical context",
      heading: "Electrical work can vary between new-town estates and older Milton Keynes settlements",
      intro: "The city's housing spans large post-war and new-town estates, modern expansion areas and historic settlements. That makes the age of the installation, previous upgrades and location of the consumer unit useful details in an electrical request.",
      points: [
        { title: "Post-war housing does not mean every installation is modern", text: "Milton Keynes has a large stock built after 1960, but electrical systems may have been altered many times since construction. State when the consumer unit or wiring was last upgraded if you know, rather than assuming the property's age tells the whole story." },
        { title: "Older areas can have extensions and mixed wiring eras", text: "Historic settlements such as Bletchley, Wolverton and Stony Stratford contain homes that have been extended or converted over time. If a fault affects only an extension, garage or converted room, make that clear." },
        { title: "Rental maintenance is an established local issue", text: "The council's private housing strategy describes a growing private rented sector and active work on housing standards. For landlord electrical work, distinguish inspections and remedial reports from ordinary fault finding." },
      ],
      checklistHeading: "Before Milton Keynes electricians respond",
      checklistIntro: "Give the electrician the installation context without opening or touching live equipment.",
      checklist: ["State the property age and any known consumer-unit or rewiring date.", "Describe which rooms, circuits or outbuildings are affected and what symptoms you observe.", "For rental work, say whether the job follows an inspection or remedial report."],
      sources: [PRIVATE_HOUSING, HOUSING],
    },
    roofer: {
      eyebrow: "Milton Keynes roofing context",
      heading: "Historic settlements and conservation areas make some Milton Keynes roofs planning-sensitive",
      intro: "Although Milton Keynes is famous for modern development, the borough includes 27 conservation areas covering historic towns, villages and parts of the new town. Roofing materials and visible alterations can therefore be address-specific planning issues.",
      points: [
        { title: "Historic towns and villages need a conservation check", text: "Council heritage data identifies conservation areas around settlements including Wolverton, Stony Stratford, Newport Pagnell, Olney and several historic villages. Check the address before changing roof materials or prominent roof features." },
        { title: "Wolverton has enhanced heritage controls", text: "Council planning documents describe the Wolverton conservation area as protecting historic railway works and housing, including controls around doors, windows and roof materials. A replacement roof there should not be specified as if it were a standard modern estate." },
        { title: "Modern estate roofs still need practical access detail", text: "On newer estates, describe whether the roof is attached, has shared valleys or garages, and how scaffolding or towers can reach the elevation. Grid-road proximity does not guarantee easy access to every rear or side wall." },
      ],
      checklistHeading: "Checks before requesting Milton Keynes roofing quotes",
      checklistIntro: "Confirm the roof type, heritage status and scaffold access before comparing replacement options.",
      checklist: ["Check conservation-area, listed-building and Article 4 status for major roof changes.", "Describe the roof material, pitch, adjoining roof lines and any extensions or garages.", "Explain scaffold access, parking and whether the work faces a rear garden or restricted side route."],
      sources: [HERITAGE, PLAN],
    },
    "painter-decorator": {
      eyebrow: "Milton Keynes decorating context",
      heading: "Modern estates and conservation areas need different decorating approaches",
      intro: "Milton Keynes combines relatively modern housing with older character areas. Interior refreshes may be straightforward, while exterior finishes in a conservation area or historic settlement need a more careful check of materials and appearance.",
      points: [
        { title: "Property age changes preparation", text: "The council's private housing strategy highlights the large volume of housing built during the rapid new-town growth of the 1970s and 1980s. Original finishes, later repairs and ageing components can all affect preparation before repainting." },
        { title: "Historic areas should not be treated like standard estates", text: "Milton Keynes has 27 conservation areas and more than 1,100 listed buildings across the wider borough. For exterior timber, masonry or character features, check the property's status before changing the finish." },
        { title: "Occupied rental work needs sequencing", text: "The local private rented sector has grown significantly over time. For a rental refresh, say whether the property is empty, furnished or occupied so protection and room-by-room working can be priced properly." },
      ],
      checklistHeading: "What to add to a Milton Keynes decorating brief",
      checklistIntro: "Describe the existing finish, occupancy and any heritage constraints before comparing quotes.",
      checklist: ["Say whether the property is modern, older or in a conservation area if known.", "Describe wallpaper, damaged plaster, staining or exterior surfaces that need preparation.", "For rented or occupied homes, explain access and whether rooms must be completed in stages."],
      sources: [PRIVATE_HOUSING, HERITAGE],
    },
    "flooring-fitter": {
      eyebrow: "Milton Keynes flooring context",
      heading: "Estate layout and property age can affect Milton Keynes flooring work",
      intro: "Flooring jobs across Milton Keynes range from modern houses with straightforward access to older or altered homes where room levels and subfloors may vary. Material delivery and preparation should be described separately from the new finish.",
      points: [
        { title: "Rapid-growth housing is now old enough for repeat refurbishment", text: "The council notes that much of Milton Keynes' stock was developed during the 1970s and 1980s. Some homes have now been refurbished several times, so do not assume the subfloor beneath the current covering is original or level." },
        { title: "Older settlements may have mixed floor construction", text: "Period homes and later extensions in historic towns can combine different floor structures or levels within the same property. Tell the fitter where extensions, knock-throughs or converted spaces meet the original house." },
        { title: "Parking and carrying routes still need checking", text: "A home may be close to a grid road but still have shared parking, a pedestrian court or long route to the entrance. Mention how long flooring packs can be delivered and stored without blocking communal areas." },
      ],
      checklistHeading: "What Milton Keynes flooring fitters need to know",
      checklistIntro: "Separate access, uplift and subfloor preparation from the installation area itself.",
      checklist: ["State the existing floor covering and any known subfloor or level changes.", "Mention extensions, knock-throughs or rooms where floors meet at different heights.", "Describe parking, delivery route, stairs and where flooring packs can be stored."],
      sources: [PRIVATE_HOUSING, HOUSING],
    },
    builder: {
      eyebrow: "Milton Keynes building context",
      heading: "Planning context changes sharply between Milton Keynes estates and historic settlements",
      intro: "Milton Keynes has modern expansion areas, older new-town estates and 27 conservation areas across historic towns and villages. Extensions and alterations should therefore start with the exact site's planning and heritage constraints, not a city-wide assumption.",
      points: [
        { title: "Use the council's mapped planning constraints", text: "Milton Keynes publishes open datasets for conservation areas, listed buildings, Article 4 directions, Tree Preservation Orders and other planning constraints. Checking the address early helps avoid designing a project around rights that do not apply." },
        { title: "Historic settlements need character-sensitive proposals", text: "Places such as Wolverton, Stony Stratford, Newport Pagnell and Woburn Sands have distinct planning and heritage contexts. Materials, roof changes and visible extensions can need a different approach from a standard estate alteration." },
        { title: "Modern estates can still carry planning conditions", text: "The council notes that trees and other planting on newer housing and business estates may be protected by planning conditions. Site constraints are not limited to old or listed properties." },
      ],
      checklistHeading: "Before requesting Milton Keynes building quotes",
      checklistIntro: "Check planning constraints and describe the exact estate or settlement before finalising the build scope.",
      checklist: ["Check conservation, listed-building, Article 4 and relevant planning-condition constraints.", "Describe whether the property is in a modern estate, older new-town area or historic settlement.", "Mention access for skips, deliveries, scaffolding and any protected trees or landscaping near the work."],
      sources: [HERITAGE, PLAN, TREES],
    },
    gardener: {
      eyebrow: "Milton Keynes garden context",
      heading: "Tree protection can apply in both historic and modern parts of Milton Keynes",
      intro: "Garden maintenance is usually straightforward, but significant tree work needs an address check. Milton Keynes protects TPO trees and trees in conservation areas, while landscaping on newer estates may also be controlled by planning conditions.",
      points: [
        { title: "TPO and conservation-area trees need permission checks", text: "Milton Keynes City Council states that protected trees and trees within conservation areas are covered by legislation and work should not be carried out without the required local-authority process." },
        { title: "New-estate landscaping may also be protected", text: "The council warns that removal of trees and planting on new housing or business estates can be prevented by planning conditions. A recently built estate is not automatically free of landscape controls." },
        { title: "Large gardens and shared green edges need clear boundaries", text: "Across villages, suburban estates and edge-of-city homes, make clear which trees, hedges and planted areas belong to the property and whether machinery can reach them without crossing communal land." },
      ],
      checklistHeading: "Before posting Milton Keynes garden or tree work",
      checklistIntro: "Check protection status first, then explain access, boundaries and waste removal.",
      checklist: ["Check TPO, conservation-area and planning-condition status before tree removal or major pruning.", "Identify property boundaries if trees or hedges sit beside shared or communal land.", "Give gate widths and say whether green waste should be removed from site."],
      sources: [TREES, HERITAGE],
    },
  },
};
