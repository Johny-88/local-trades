import { makeLeedsProfile } from "./leedsProfileBase";

export const treeSurgeonsLeeds = makeLeedsProfile("tree-surgeons", {
  "heroCopy": "Need a tree pruned, reduced, removed or a stump dealt with in Leeds? Describe the tree, access and nearby buildings once, then compare tree surgeons with suitable experience.",
  "answer": {
    "title": "Looking for a tree surgeon near you in Leeds?",
    "copy": "Enter the postcode and add clear photos of the whole tree, access and nearby buildings or boundaries. Mention any known Tree Preservation Order or conservation-area status before work is priced."
  },
  "localContext": {
    "eyebrow": "Leeds tree-work rules",
    "title": "Protected trees and conservation areas need checking before work begins",
    "intro": "Leeds has extensive heritage protection, and the permission route can change depending on whether a tree has a TPO or stands within a conservation area.",
    "items": [
      {
        "title": "TPO trees need permission before work",
        "text": "Leeds City Council says you must get permission before carrying out work on a tree covered by a Tree Preservation Order. The council provides an online map so the position can be checked by address or location before the quote is finalised.",
        "source": {
          "label": "Leeds City Council — tree works and preservation",
          "url": "https://www.leeds.gov.uk/planning/conservation-protection-and-heritage/tree-works-and-preservation"
        }
      },
      {
        "title": "Conservation-area tree work normally needs six weeks' notice",
        "text": "Leeds City Council says permission is required before working on most trees in a conservation area and asks for at least six weeks' notice for proposed work, subject to limited exceptions. Leeds currently has 80 conservation areas across the district.",
        "source": {
          "label": "Leeds City Council — conservation areas",
          "url": "https://www.leeds.gov.uk/planning/conservation-protection-and-heritage/conservation-area"
        }
      }
    ]
  },
  "areaCopy": {
    "intro": "Tree surgeons may cover Leeds according to postcode, access and the scale of the tree. Example areas include:",
    "sideTitle": "Check protection before accepting a work date",
    "sideCopy": "A quote can be accurate but still not be ready to start if the tree is protected. Confirm who will check TPO and conservation-area status and, where needed, who will submit the notice or application.",
    "noteLead": "Show access for machinery.",
    "noteText": "Gates, steps, neighbouring land, overhead lines and the route for removing timber can materially change the job."
  },
  "faq": [
    [
      "Do I need permission to prune a protected tree in Leeds?",
      "Yes. Leeds City Council says work to a tree covered by a Tree Preservation Order requires permission."
    ],
    [
      "What if the tree is in a conservation area?",
      "Most tree work in a Leeds conservation area needs notice to the council at least six weeks before the proposed work, subject to limited exceptions."
    ],
    [
      "How many conservation areas does Leeds have?",
      "Leeds City Council currently lists 80 conservation areas across the district."
    ],
    [
      "Should stump grinding be included in the quote?",
      "Do not assume it is. Ask whether stump grinding, timber removal, chipping and site clearance are included or priced separately."
    ],
    [
      "Do I have to hire a tree surgeon who responds?",
      "No. There is no obligation to hire."
    ]
  ],
  "cta": {
    "title": "Ready to compare tree surgeons in Leeds?",
    "copy": "Describe the tree, access and any known protection once, then compare interested Leeds tree surgeons and quotes.",
    "buttonLabel": "Get Leeds tree-surgery quotes"
  }
});

export const architectsLeeds = makeLeedsProfile("architects", {
  "heroCopy": "Planning an extension, remodelling project or new design in Leeds? Describe the property, goals and likely planning context once, then compare architects suited to the scale of the work.",
  "answer": {
    "title": "Looking for an architect near you in Leeds?",
    "copy": "Enter the postcode and explain the existing property, the space you want to create and any known planning, heritage or flood constraints. Suitable Leeds architects can decide whether the project matches their experience."
  },
  "localContext": {
    "eyebrow": "Leeds design and planning",
    "title": "Heritage and flood risk can materially change a Leeds design brief",
    "intro": "The same extension can face very different constraints depending on the street and site. Heritage status and flood risk should be identified early rather than after drawings are complete.",
    "items": [
      {
        "title": "Leeds has 80 conservation areas",
        "text": "Leeds City Council lists 80 conservation areas and explains that new buildings, extensions and alterations requiring permission should preserve or enhance the area's special character. Permitted-development rights are also restricted for some normally minor works.",
        "source": {
          "label": "Leeds City Council — conservation areas",
          "url": "https://www.leeds.gov.uk/planning/conservation-protection-and-heritage/conservation-area"
        }
      },
      {
        "title": "Leeds maps river, surface-water, sewer and groundwater risk",
        "text": "The council's Strategic Flood Risk Assessment considers flooding from rivers, surface water, sewers and groundwater and provides an interactive map. For sites with meaningful risk, drainage and flood mitigation can affect levels, layout and the information needed for planning.",
        "source": {
          "label": "Leeds City Council — Strategic Flood Risk Assessment",
          "url": "https://www.leeds.gov.uk/planning/planning-policy/evidence-and-monitoring/strategic-flood-risk"
        }
      }
    ]
  },
  "areaCopy": {
    "intro": "Architects may work across Leeds depending on project type and planning context. Example areas include:",
    "sideTitle": "Share the address before discussing a design route",
    "sideCopy": "The postcode lets an architect check conservation status, nearby listed buildings, flood mapping and the planning history that may affect the project.",
    "noteLead": "Agree the appointment stage.",
    "noteText": "Concept design, planning drawings, building-regulation information, tender support and site involvement are separate scopes and should be priced clearly."
  },
  "faq": [
    [
      "Do I need an architect for an extension in Leeds?",
      "Not every extension legally requires an architect, but professional design input can be valuable where layout, planning, structure, heritage or technical coordination is significant."
    ],
    [
      "How do Leeds conservation areas affect a project?",
      "Leeds has 80 conservation areas. Development that needs permission should preserve or enhance their character, and some permitted-development rights are more restricted."
    ],
    [
      "Should flood risk be checked before design work?",
      "Yes where relevant. Leeds' Strategic Flood Risk Assessment maps several sources of flood risk and can affect drainage, levels and planning information."
    ],
    [
      "What should an architect's fee include?",
      "Confirm which stages are included: feasibility, measured survey, concept, planning, technical design, tendering and site support."
    ],
    [
      "Do I have to hire an architect who responds?",
      "No. There is no obligation to hire."
    ]
  ],
  "cta": {
    "title": "Ready to compare architects in Leeds?",
    "copy": "Describe the property and design goal once, then compare interested Leeds architects and the stages included in their fees.",
    "buttonLabel": "Get Leeds architect quotes"
  }
});
