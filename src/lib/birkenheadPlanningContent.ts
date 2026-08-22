import { makeBirkenheadProfile } from "./birkenheadProfileBase";

export const treeSurgeonsBirkenhead = makeBirkenheadProfile("tree-surgeons", {
  heroCopy: "Need pruning, reduction, felling or other tree work in Birkenhead? Describe the tree, access, nearby buildings and required work once, then compare tree surgeons who cover your area.",
  answer: {
    title: "Looking for a tree surgeon near you in Birkenhead?",
    copy: "Enter the postcode, number and approximate size of trees, proposed work, access and waste requirements. Mention any Tree Preservation Order, conservation area or suspected protection so suitable Birkenhead tree surgeons can plan the job correctly.",
  },
  localContext: {
    eyebrow: "Protected trees in Birkenhead",
    title: "Tree work in a Wirral conservation area normally needs six weeks' written notice, even without a TPO",
    intro: "Birkenhead includes and borders several conservation areas with mature tree cover, including Birkenhead Park, Oxton Village, Clifton Park and Flaybrick Cemetery. The legal status of the tree should be checked before a start date is agreed.",
    items: [
      {
        title: "Conservation-area tree work requires six weeks' prior written notice",
        text: "Wirral Council says anyone proposing work to a tree in a conservation area must give the Local Planning Authority six weeks' written notice, even where the tree is not protected by a Tree Preservation Order. Work should not start during that period unless the council agrees.",
        source: {
          label: "Wirral Council — trees in conservation areas",
          url: "https://www.wirral.gov.uk/planning-and-building/built-conservation/tree-preservation/trees-conservation-areas",
        },
      },
      {
        title: "TPO-protected trees need permission before cutting or pruning",
        text: "Wirral Council maintains a map of Tree Preservation Orders and says it is an offence to cut down, top, lop, uproot, damage or destroy a protected tree without prior consent unless an exemption applies.",
        source: {
          label: "Wirral Council — Tree Preservation Orders",
          url: "https://www.wirral.gov.uk/planning-and-building/tree-preservation/tree-preservation-orders",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Tree surgeons may cover Birkenhead by postcode, tree size, access and protection status. Example areas include:",
    sideTitle: "Check protection before agreeing a start date",
    sideCopy: "A garden tree in Rock Ferry, mature trees near Birkenhead Park and work in Oxton can face different access and planning constraints. Give the tree surgeon the exact address early.",
    noteLead: "Do not confuse ownership with permission to prune.",
    noteText: "Even a privately owned tree can be protected. Check the address for TPO or conservation-area status before agreeing felling, crown reduction or major pruning.",
  },
  faq: [
    ["How much does a tree surgeon cost in Birkenhead?", "Cost depends on tree size, species, access, climbing or machinery required, waste removal, stump work and protection constraints."],
    ["How much notice is needed for tree work in a Wirral conservation area?", "Wirral Council says six weeks' written notice is normally required."],
    ["Do I need permission to work on a TPO tree?", "Yes. Wirral Council says prior consent is normally required for work to a tree protected by a Tree Preservation Order."],
    ["Are there conservation areas around Birkenhead?", "Yes. Wirral lists areas including Birkenhead Park, Hamilton Square, Oxton Village, Clifton Park and Flaybrick Cemetery."],
    ["Do I have to hire a tree surgeon who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare tree surgeons in Birkenhead?",
    copy: "Describe the tree work, access and protection status once, then compare interested Birkenhead tree surgeons and their quotes.",
    buttonLabel: "Get Birkenhead tree-surgery quotes",
  },
});

export const architectsBirkenhead = makeBirkenheadProfile("architects", {
  heroCopy: "Planning an extension, conversion, remodelling or other building project in Birkenhead? Describe the property, goals and constraints once, then compare architects and designers who cover your area.",
  answer: {
    title: "Looking for an architect near you in Birkenhead?",
    copy: "Enter the postcode, property type, project scope and whether you need concept design, planning drawings, Building Regulations information or a fuller service. Suitable Birkenhead architects can then respond to the same brief.",
  },
  localContext: {
    eyebrow: "Birkenhead heritage and planning context",
    title: "Birkenhead contains several of Wirral's 26 conservation areas, including nationally important Hamilton Square",
    intro: "Designing only to generic house-extension assumptions can miss the local heritage context. Birkenhead Park, Hamilton Square, Oxton Village, Clifton Park and Flaybrick Cemetery are all protected conservation areas in or around Birkenhead.",
    items: [
      {
        title: "Wirral has 26 conservation areas with several concentrated around Birkenhead",
        text: "Wirral Council lists 26 conservation areas and specifically includes Birkenhead Park, Hamilton Square, Oxton Village, Clifton Park and Flaybrick Cemetery. Development proposals in conservation areas are expected to preserve or enhance their special character.",
        source: {
          label: "Wirral Council — conservation areas",
          url: "https://www.wirral.gov.uk/planning-and-building/built-conservation/conservation-areas",
        },
      },
      {
        title: "Hamilton Square and Birkenhead Park have specific local heritage significance",
        text: "Wirral Council identifies Hamilton Square as nationally important, while its Birkenhead Park appraisal describes the park and surrounding historic development as a major part of Birkenhead's nineteenth-century planned townscape. Address-specific heritage checks should happen before the design is fixed.",
        source: {
          label: "Wirral Council — Birkenhead Park Conservation Area",
          url: "https://www.wirral.gov.uk/planning-and-building/built-conservation/conservation-areas",
        },
      },
    ],
  },
  areaCopy: {
    intro: "Architects and designers may cover Birkenhead by postcode, project type and required service. Example areas include:",
    sideTitle: "Give the exact address before assuming the planning route",
    sideCopy: "An extension in Prenton, alterations in Oxton and work near Hamilton Square can sit under very different heritage and site constraints. Address checks should happen before concept drawings are treated as final.",
    noteLead: "Planning permission and Building Control are separate.",
    noteText: "A project can need one, both or neither depending on the work. Ask the designer to state what they are providing and which approvals, surveys and technical drawings remain outside their fee.",
  },
  faq: [
    ["How much does an architect cost in Birkenhead?", "Fees depend on project size, complexity and service level, from measured survey and planning drawings through to detailed design and contract administration."],
    ["How many conservation areas are there in Wirral?", "Wirral Council lists 26 conservation areas across the borough."],
    ["Which conservation areas are around Birkenhead?", "Examples include Birkenhead Park, Hamilton Square, Oxton Village, Clifton Park and Flaybrick Cemetery."],
    ["Does planning permission guarantee Building Regulations approval?", "No. Planning and Building Control are separate approval systems and a project may need both."],
    ["Do I have to hire an architect who responds?", "No. Up to three interested local professionals can respond and there is no obligation to hire."],
  ],
  cta: {
    title: "Ready to compare architects in Birkenhead?",
    copy: "Describe the property and project once, then compare interested Birkenhead architects or designers and their quotes.",
    buttonLabel: "Get Birkenhead architect quotes",
  },
});
