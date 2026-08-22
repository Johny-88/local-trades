import { makeSuttonProfile } from "./suttonProfileBase";

export const treeSurgeonsSutton = makeSuttonProfile("tree-surgeons", {
  heroCopy: "Need a tree surgeon in Sutton for pruning, crown work, removal or a tree-safety concern? Describe the tree, access and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Sutton?",
    copy: "Enter the postcode, approximate tree size, species if known and the work you think is needed. Add photos and mention buildings, roads, overhead lines, restricted access or protected-tree status so suitable Sutton tree surgeons can assess the job properly.",
  },
  localContext: {
    eyebrow: "Sutton protected-tree checks",
    title: "Check TPO, conservation-area and planning-condition protection before pruning or felling",
    intro: "Sutton Council identifies three common forms of tree protection: Tree Preservation Orders, conservation-area controls and planning conditions. The legal status should be checked before a contractor prices work on the assumption that it can start immediately.",
    items: [
      {
        title: "TPO trees cannot be cut down or lopped without council consent",
        text: "Sutton says a Tree Preservation Order makes it an offence to cut down, uproot, top, lop, wilfully damage or destroy a protected tree without consent. The council provides a tree map and application route to check status and request permission.",
        source: {
          label: "London Borough of Sutton — types of tree protection",
          url: "https://www.sutton.gov.uk/libraries-museums-parks-and-leisure/parks-trees-and-open-spaces/trees/tree-protection/types",
        },
      },
      {
        title: "Conservation-area tree work normally needs six weeks' notice",
        text: "For a tree in a conservation area measuring more than 75mm in diameter at 1.5m above ground, Sutton says written notice must normally be given at least six weeks before works. That notice period should be built into the job timetable.",
        source: {
          label: "London Borough of Sutton — types of tree protection",
          url: "https://www.sutton.gov.uk/libraries-museums-parks-and-leisure/parks-trees-and-open-spaces/trees/tree-protection/types",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Sutton by postcode, tree size and access. Example areas include:",
    sideTitle: "Give enough information to plan equipment and permissions",
    sideCopy: "A garden conifer in Wallington, a mature tree in Cheam and roadside crown work in Carshalton can involve very different access and risk. Photos showing the whole tree and its surroundings are useful.",
    noteLead: "Do not assume a privately owned tree is automatically free to cut.",
    noteText: "Check TPO, conservation-area and planning-condition status first, then make sure the quote states who will handle any application, waste removal and stump work.",
  },
  faq: [
    ["How much does a tree surgeon cost in Sutton?", "Cost depends on tree size, species, access, risk, equipment, waste removal and whether stump grinding or traffic management is needed."],
    ["How do I know if a tree has a TPO in Sutton?", "Sutton Council provides a tree-status map and advises checking TPO, conservation-area and planning-condition protection before work starts."],
    ["How much notice is needed for a tree in a Sutton conservation area?", "Sutton says qualifying conservation-area tree work normally requires at least six weeks' written notice."],
    ["Can a tree surgeon help with the permission process?", "Many can help prepare or submit tree-work applications, but agree responsibility clearly before work starts."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Sutton?",
    copy: "Describe the tree, access and required work once, then compare interested Sutton tree surgeons and their quotes.",
    buttonLabel: "Get Sutton tree-surgery quotes",
  },
});

export const architectsSutton = makeSuttonProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling project or new design in Sutton? Describe the property, goals and planning constraints once, then compare architects who cover your area.",
  answer: {
    title: "Looking for an architect near you in Sutton?",
    copy: "Enter the postcode, property type and intended work. Include existing drawings or photos, whether the site is in a conservation area and any previous planning history so suitable Sutton architects can assess the likely design and approval route.",
  },
  localContext: {
    eyebrow: "Sutton planning and heritage",
    title: "Conservation areas and Article 4 directions can remove assumptions about permitted development",
    intro: "Sutton has a substantial heritage framework, including 15 conservation areas, while Article 4 directions remove specified permitted-development rights in particular circumstances. An architect should check the exact address before relying on standard householder assumptions.",
    items: [
      {
        title: "The borough has 15 conservation areas",
        text: "Sutton's current character evidence identifies 15 conservation areas, including Cheam Village, Carshalton Village, Sutton Town Centre and Sutton Garden Suburb. Conservation-area status can affect design, materials, demolition and the weight given to local character in planning decisions.",
        source: {
          label: "London Borough of Sutton — Draft Sutton Character Study 2024",
          url: "https://www.sutton.gov.uk/documents/d/guest/draft-sutton-character-study-2024-1-",
        },
      },
      {
        title: "Sutton has both borough-wide and area-specific Article 4 controls",
        text: "The borough-wide HMO Article 4 Direction requires planning permission for changes from C3 dwellinghouses to C4 small HMOs. Sutton also has separate Article 4 controls for specified properties in Sutton Garden Suburb and for certain roof alterations elsewhere in the borough.",
        source: {
          label: "London Borough of Sutton — Article 4 Directions",
          url: "https://www.sutton.gov.uk/planning-and-building/planning/planning-policy/article-4-directions",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects may cover Sutton by postcode, project type and planning complexity. Example areas include:",
    sideTitle: "Start with the site's actual planning constraints",
    sideCopy: "An extension in Belmont, remodelling in Sutton town centre and external alterations in Cheam can follow different planning routes. Give the architect the full address so conservation and Article 4 controls can be checked early.",
    noteLead: "Planning permission and Building Regulations are separate.",
    noteText: "A project may need one, both or neither depending on the work. Ask the architect to state which approvals, drawings and consultant inputs are included in the fee.",
  },
  faq: [
    ["How much does an architect cost in Sutton?", "Fees depend on project size, complexity, survey work, planning risk, structural input and how far the architect's service continues through construction."],
    ["How many conservation areas does Sutton have?", "Sutton's current character evidence identifies 15 conservation areas across the borough."],
    ["Does Sutton have an HMO Article 4 Direction?", "Yes. The borough-wide direction came into force on 22 February 2025 and requires planning permission for C3-to-C4 small-HMO changes of use."],
    ["Does Sutton Garden Suburb have extra planning controls?", "Yes. Sutton has an Article 4 Direction removing specified permitted-development rights from certain properties and curtilages in the Sutton Garden Suburb Conservation Area."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Sutton?",
    copy: "Describe the property and project once, then compare interested Sutton architects and their quotes.",
    buttonLabel: "Get Sutton architect quotes",
  },
});
