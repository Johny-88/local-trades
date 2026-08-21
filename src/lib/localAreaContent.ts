import type { LocalCityKey, LocalTradeKey } from "./localPages";

export type LocalResearchSource = {
  label: string;
  url: string;
};

export type LocalTradeAreaContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  points: ReadonlyArray<{ title: string; text: string }>;
  checklistHeading: string;
  checklistIntro: string;
  checklist: ReadonlyArray<string>;
  sources: ReadonlyArray<LocalResearchSource>;
};

export type LocalAreaProfile = {
  city: string;
  housingSummary: string;
  housingFacts: ReadonlyArray<{ value: string; label: string }>;
  areas: ReadonlyArray<string>;
  housingSourceLabel: string;
  housingSourceUrl: string;
  areaSourceLabel: string;
  areaSourceUrl: string;
  tradeContent: Partial<Record<LocalTradeKey, LocalTradeAreaContent>>;
};

const CENSUS_SOURCE: LocalResearchSource = {
  label: "Birmingham City Observatory — Census 2021 housing facts",
  url: "https://www.cityobservatory.birmingham.gov.uk/explore/dataset/census-2021-factsheets/files/d3acd16ff3a7a90a5882446174cb4d1b/download/",
};

const CONSERVATION_SOURCE: LocalResearchSource = {
  label: "Birmingham City Council — conservation areas",
  url: "https://www.birmingham.gov.uk/info/20055/conservation_areas/13/birminghams_conservation_areas/2",
};

const ARTICLE_4_SOURCE: LocalResearchSource = {
  label: "Birmingham City Council — Article 4 Directions",
  url: "https://www.birmingham.gov.uk/info/20055/conservation_areas/15/",
};

const CONSERVATION_PERMISSION_SOURCE: LocalResearchSource = {
  label: "Birmingham City Council — work in conservation areas",
  url: "https://www.birmingham.gov.uk/conservationpermission",
};

const SELECTIVE_LICENSING_SOURCE: LocalResearchSource = {
  label: "Birmingham City Council — selective licensing",
  url: "https://www.birmingham.gov.uk/info/20175/private_housing/2649/",
};

const TREE_SOURCE: LocalResearchSource = {
  label: "Birmingham City Council — trees in conservation areas",
  url: "https://www.birmingham.gov.uk/info/20055/conservation_areas/35/trees_in_conservation_areas",
};

const ELECTRICAL_RENTAL_SOURCE: LocalResearchSource = {
  label: "GOV.UK — electrical safety standards for rented homes",
  url: "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance",
};

const FLOOR_REGULATIONS_SOURCE: LocalResearchSource = {
  label: "Planning Portal — floor insulation and Building Regulations",
  url: "https://www.planningportal.co.uk/permission/common-projects/insulation/building-regulations-floor-insulation/",
};

const BIRMINGHAM_PROFILE: LocalAreaProfile = {
  city: "Birmingham",
  housingSummary:
    "Birmingham has a genuinely mixed housing stock rather than one dominant property type. Census 2021 data shows semi-detached homes are the largest group, followed by terraced homes and purpose-built flats or tenements. That matters for trade work because access, layout, shared building elements and the likely scope can be very different from one property to another.",
  housingFacts: [
    { value: "35.6%", label: "semi-detached homes" },
    { value: "27.8%", label: "terraced homes" },
    { value: "21.0%", label: "purpose-built flats or tenements" },
    { value: "45.0%", label: "households in 3-bedroom homes" },
  ],
  areas: [
    "Edgbaston",
    "Harborne",
    "Selly Oak",
    "Erdington",
    "Hall Green",
    "Kings Heath",
    "Yardley",
    "Sutton Coldfield",
  ],
  housingSourceLabel: CENSUS_SOURCE.label,
  housingSourceUrl: CENSUS_SOURCE.url,
  areaSourceLabel: "Birmingham City Council — current ward map",
  areaSourceUrl:
    "https://www.birmingham.gov.uk/download/downloads/id/31143/birmingham_ward_map_current_boundaries_since_2018.pdf",
  tradeContent: {
    handyman: {
      eyebrow: "Birmingham job details",
      heading: "Local details that can change a Birmingham handyman visit",
      intro:
        "A short handyman job is often won or lost on practical details. Birmingham has a substantial mix of flats and privately rented homes alongside terraces and semi-detached houses, so access and who is arranging the work can be just as important as the task list.",
      points: [
        {
          title: "Flats can turn access into part of the job",
          text: "Census 2021 data shows 21.0% of Birmingham households were in purpose-built flats or tenements. For a flat, include the floor, lift availability, communal-door arrangements and how bulky furniture or materials can reach the property.",
        },
        {
          title: "Rental maintenance is a sizeable local use case",
          text: "Private renting accounted for 22.6% of Birmingham households in the 2021 Census, and the city also operates selective licensing in 25 wards. If a landlord or agent is arranging the work, make clear who can provide access and approve any extra work discovered on site.",
        },
        {
          title: "Small tasks are easier to price as one clear visit",
          text: "For shelves, furniture assembly, sealant, doors and minor repairs, group the tasks together and mention awkward stairs, restricted access or difficult loading. That gives a handyman a more realistic picture of the visit before responding.",
        },
      ],
      checklistHeading: "What to add to a Birmingham handyman request",
      checklistIntro:
        "A few local and property details can make a small-job quote much more useful.",
      checklist: [
        "Say whether it is a house or flat and include the floor, lift and communal-access details where relevant.",
        "List all the small jobs you want completed in the same visit and note any heavy or bulky items.",
        "If the property is rented, say whether a tenant, landlord or agent will provide access and approve changes.",
      ],
      sources: [CENSUS_SOURCE, SELECTIVE_LICENSING_SOURCE],
    },
    plumber: {
      eyebrow: "Birmingham plumbing context",
      heading: "Property layout matters when you post a plumbing job in Birmingham",
      intro:
        "The city’s mix of houses, terraces and flats means two jobs described as the same leak can involve very different access and pipe routes. Giving the property context at the start helps plumbers judge the likely first visit without guessing.",
      points: [
        {
          title: "Flats may involve shared routes or communal access",
          text: "With 21.0% of Birmingham households in purpose-built flats or tenements in the 2021 Census, it is worth saying which floor the problem is on, where the water can be isolated if known and whether any relevant pipework appears to pass through a communal area.",
        },
        {
          title: "Rented properties can involve more than one contact",
          text: "Private renting represented 22.6% of Birmingham households in 2021, while selective licensing applies in 25 wards. If you are posting for a rental, identify whether the tenant, landlord or managing agent will provide access and make decisions about additional work.",
        },
        {
          title: "The exact symptom is more useful than a guessed diagnosis",
          text: "Say where water appears, when it happens, whether the supply can be isolated and whether other rooms or properties seem affected. A plumber can then assess urgency and access without relying on a homeowner diagnosis that may be wrong.",
        },
      ],
      checklistHeading: "Details that help a Birmingham plumber assess the visit",
      checklistIntro:
        "Describe what you can observe safely and add the access details that are specific to the property.",
      checklist: [
        "Give the exact postcode, property type and floor level if it is a flat.",
        "Explain where the leak or fault appears and whether you know how to isolate the water.",
        "For a rental or managed flat, identify who will provide access and whether a landlord or agent needs to approve further work.",
      ],
      sources: [CENSUS_SOURCE, SELECTIVE_LICENSING_SOURCE],
    },
    electrician: {
      eyebrow: "Birmingham electrical context",
      heading: "Birmingham’s rental and flat mix can change the electrical brief",
      intro:
        "Electrical jobs need a precise description of both the fault and the property. Birmingham has a large rented sector as well as many purpose-built flats, creating a useful distinction between ordinary owner-occupied repairs, landlord safety work and jobs where communal access may matter.",
      points: [
        {
          title: "Rented-home safety work is locally relevant",
          text: "The 2021 Census recorded 22.6% of Birmingham households privately renting and 23.5% in social housing. Current England guidance requires landlords to have rented-home electrical installations inspected and tested by a qualified person at least every five years.",
        },
        {
          title: "Say when the job follows an EICR",
          text: "If you already have an electrical safety report, tell the electrician whether the request is for an inspection, remedial work or a separate fault. Sharing the relevant observations or codes helps responders understand the actual scope before quoting.",
        },
        {
          title: "Flats need a clear boundary between private and communal issues",
          text: "For a flat, state the floor, where the consumer unit is if known and exactly which rooms or circuits are affected. If a fault appears to involve communal lighting, shared supplies or a building-managed area, say that rather than assuming it is inside the flat.",
        },
      ],
      checklistHeading: "What to include before Birmingham electricians respond",
      checklistIntro:
        "Keep the description factual and leave live electrical investigation to the electrician.",
      checklist: [
        "Say whether the property is owner-occupied or rented and whether the work relates to an EICR or remedial report.",
        "Describe tripping, loss of power, heat, smells, flickering or other symptoms without opening or touching live equipment.",
        "For flats, include the floor, access arrangements and whether the affected equipment is inside the home or in a communal area.",
      ],
      sources: [CENSUS_SOURCE, ELECTRICAL_RENTAL_SOURCE],
    },
    roofer: {
      eyebrow: "Birmingham roofing context",
      heading: "Planning and property details can change a Birmingham roofing job",
      intro:
        "Roofing is one trade where the local setting can materially alter the work. Birmingham currently has 29 recognised conservation areas, and several have Article 4 Directions that place extra controls on alterations including re-roofing.",
      points: [
        {
          title: "Check conservation status before assuming a re-roof is routine",
          text: "Birmingham City Council lists 29 conservation areas, including locations in Edgbaston, Harborne, Hall Green, Sutton Coldfield, Northfield and Yardley. Work in a conservation area can require additional checks on permission, methods and suitable materials.",
        },
        {
          title: "Article 4 controls can include re-roofing",
          text: "The council says that in Birmingham’s Article 4 areas even relatively minor alterations such as replacing windows, constructing a porch or re-roofing can require planning permission. Flag the designation before asking contractors to price a replacement roof.",
        },
        {
          title: "Terraces and semi-detached homes make adjoining details important",
          text: "Together, terraced and semi-detached homes represented 63.4% of Birmingham households in the 2021 Census. Describe chimneys, valleys, shared roof lines, adjoining gutters and the exact front or rear position of the defect so the roofer knows what they are assessing.",
        },
      ],
      checklistHeading: "Checks to make before posting Birmingham roofing work",
      checklistIntro:
        "A few address-specific checks can prevent a roof quote from being based on the wrong assumptions.",
      checklist: [
        "Check whether the address is in a conservation area, an Article 4 area or is a listed building before major replacement work.",
        "Describe the roof type and whether the problem touches a chimney, valley, party line, extension, garage or adjoining gutter.",
        "Mention front and rear access, space for scaffolding or towers and any obvious restrictions around the building.",
      ],
      sources: [CONSERVATION_SOURCE, ARTICLE_4_SOURCE, CENSUS_SOURCE],
    },
    "painter-decorator": {
      eyebrow: "Birmingham decorating context",
      heading: "Historic areas, rentals and access can all change a decorating scope",
      intro:
        "Most decorating jobs are straightforward, but the address can still matter. Birmingham combines a large rental sector with 29 conservation areas, so exterior finishes, historic properties and fast rental refreshes should not all be described as the same generic painting job.",
      points: [
        {
          title: "Exterior work in conservation areas deserves an early check",
          text: "Birmingham City Council advises owners in conservation areas to check permissions before work and notes that appropriate construction methods and materials can matter. If the decorating involves exterior masonry, timber or other character-sensitive surfaces, identify the designation before work begins.",
        },
        {
          title: "Older or protected buildings may need a different approach",
          text: "Where a property is listed or otherwise protected, do not assume every surface can simply be stripped, filled and recoated in the usual way. Tell the decorator about the status and any known requirements so preparation and products can be discussed properly.",
        },
        {
          title: "Rental refreshes need a clear occupied-or-empty brief",
          text: "Private renting accounted for 22.6% of Birmingham households in the 2021 Census. For a rental refresh, say whether the property is empty, partly furnished or occupied and whether access is through a tenant or agent, because that can change protection, sequencing and working time.",
        },
      ],
      checklistHeading: "Local details to add to a Birmingham decorating job",
      checklistIntro:
        "The goal is to make the finish, access and property constraints clear before prices are compared.",
      checklist: [
        "For exterior work, check and mention conservation-area, Article 4 or listed status where relevant.",
        "Say whether the property is occupied, empty or rented and who will provide access.",
        "Describe existing coatings, wallpaper, staining, damaged plaster and any surfaces where preparation may need special care.",
      ],
      sources: [CONSERVATION_SOURCE, CONSERVATION_PERMISSION_SOURCE, CENSUS_SOURCE],
    },
    "flooring-fitter": {
      eyebrow: "Birmingham flooring context",
      heading: "Access and the existing floor can matter as much as the new finish",
      intro:
        "A flooring quote is not only about square metres. Birmingham’s mix of flats, terraces and houses means material delivery, stairs, uplift and the condition of the existing base can vary considerably between otherwise similar jobs.",
      points: [
        {
          title: "Flat access should be part of the flooring brief",
          text: "Purpose-built flats or tenements accounted for 21.0% of Birmingham households in the 2021 Census. If the job is above ground floor, include lift dimensions or availability, stair access, communal routes and where packs of flooring can be delivered and stored.",
        },
        {
          title: "Occupied and rental properties need a clear uplift plan",
          text: "Private renting made up 22.6% of Birmingham households in 2021. Whether a property is empty between tenancies or fully occupied can change furniture moving, room sequencing, old-floor uplift and how quickly each area can be handed back.",
        },
        {
          title: "Deep floor renovation is different from replacing a covering",
          text: "Ordinary laminate or LVT replacement is not the same as substantial work to the floor structure. Planning Portal guidance says renovation of more than 25% of a solid or suspended floor involving replacement of screed or a timber floor deck must meet relevant Building Regulations standards.",
        },
      ],
      checklistHeading: "What Birmingham floor fitters need to know first",
      checklistIntro:
        "Give fitters enough information to separate fitting labour from access, uplift and subfloor work.",
      checklist: [
        "Give the floor level, lift or stair access and any restrictions on delivering long or heavy flooring packs.",
        "State the existing covering, known subfloor type and whether uplift, disposal or levelling is required.",
        "If the project goes beyond a surface covering into substantial screed or floor-deck replacement, check the Building Regulations position before agreeing the scope.",
      ],
      sources: [CENSUS_SOURCE, FLOOR_REGULATIONS_SOURCE],
    },
    builder: {
      eyebrow: "Birmingham project context",
      heading: "Bigger Birmingham building projects need address-specific checks",
      intro:
        "An extension or structural alteration cannot be made genuinely local just by changing the city name in the heading. Birmingham’s varied housing, conservation controls and site constraints mean the address can affect permissions, design assumptions, access and the information a builder needs to price responsibly.",
      points: [
        {
          title: "Conservation status can change the planning conversation",
          text: "Birmingham currently has 29 recognised conservation areas, with Article 4 Directions in a number of them. If the project changes the exterior, roof, windows or other character-sensitive features, establish the property’s status before treating permitted development rights as automatic.",
        },
        {
          title: "Historic-area materials and methods may matter",
          text: "The council advises homeowners in conservation areas to check permissions and notes that appropriate construction methods and materials, including bricks and roofing materials, can be important. Share any planning conditions or design requirements with builders quoting the work.",
        },
        {
          title: "Protected trees can affect extensions and site logistics",
          text: "Birmingham protects trees through Tree Preservation Orders and conservation-area controls. If an extension, access route, scaffold, excavation or storage area is close to established trees, check their status early rather than after the build has been priced.",
        },
      ],
      checklistHeading: "What to prepare before Birmingham builders quote",
      checklistIntro:
        "For larger projects, the useful local content is the actual constraint at the address, not a generic paragraph about Birmingham.",
      checklist: [
        "Share planning, prior-approval, Building Regulations and structural information you already have, rather than asking builders to assume the approval route.",
        "Check conservation-area, Article 4, listed-building and protected-tree status where any could affect the proposal.",
        "Explain access for skips, scaffolding and deliveries, whether the property will be occupied and any tight side passages or shared approaches.",
      ],
      sources: [CONSERVATION_SOURCE, ARTICLE_4_SOURCE, CONSERVATION_PERMISSION_SOURCE, TREE_SOURCE],
    },
    gardener: {
      eyebrow: "Birmingham garden context",
      heading: "Tree protection and access can materially change a Birmingham garden job",
      intro:
        "Garden maintenance can be simple, but tree work is one area where the exact Birmingham address matters. The city has 29 conservation areas, and trees within conservation areas receive automatic protection in addition to trees covered by individual Tree Preservation Orders.",
      points: [
        {
          title: "Conservation-area trees are protected",
          text: "Birmingham City Council states that trees in conservation areas are automatically protected from being cut down or having work done to them, subject to limited exceptions. Check the address before arranging significant pruning or removal.",
        },
        {
          title: "Six weeks’ notice can be required",
          text: "For work to a tree in a Birmingham conservation area, the council says six weeks’ notice must normally be given. A separately protected Tree Preservation Order can require consent, so tree status should be checked before the job is treated as routine garden clearance.",
        },
        {
          title: "Rear access changes the practical job",
          text: "For ordinary mowing, hedge work and clearances, tell gardeners whether the garden has direct side or rear access or whether tools and waste must pass through the home. That detail affects what machinery can be brought in and how green waste can be removed.",
        },
      ],
      checklistHeading: "What to check before posting Birmingham garden work",
      checklistIntro:
        "Separate ordinary maintenance from work that may involve protected trees, then describe the physical access clearly.",
      checklist: [
        "Check conservation-area and Tree Preservation Order status before arranging significant tree pruning, lopping or removal.",
        "Give gate widths or explain if access is only through the house, a shared passage or communal grounds.",
        "Say whether cuttings and green waste should be removed and whether the job needs machinery as well as hand tools.",
      ],
      sources: [CONSERVATION_SOURCE, TREE_SOURCE],
    },
  },
};

export const LOCAL_AREA_PROFILES: Partial<Record<LocalCityKey, LocalAreaProfile>> = {
  birmingham: BIRMINGHAM_PROFILE,
};

export function getLocalAreaProfile(city: LocalCityKey) {
  return LOCAL_AREA_PROFILES[city];
}
