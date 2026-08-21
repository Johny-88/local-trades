import type { ServiceSlug } from "./serviceIframe";

export type ServicePageDetails = {
  intro: string;
  jobsIntro: string;
  jobs: readonly { title: string; text: string }[];
  checks: readonly { title: string; text: string }[];
};

export const SERVICE_PAGE_DETAILS: Record<ServiceSlug, ServicePageDetails> = {
  "removal-companies": {
    intro: "Planning a house move, flat move or smaller transport job? Describe the move once and compare suitable removal companies that are interested in helping.",
    jobsIntro: "Removal companies can help with everything from a single-room move to a full household relocation, depending on the size, access and distance involved.",
    jobs: [
      { title: "House removals", text: "Loading, transport and unloading for full household moves between properties." },
      { title: "Flat & apartment moves", text: "Moves where stairs, lifts, loading access and building rules may need extra planning." },
      { title: "Man with a van", text: "Smaller moves, furniture collections and jobs that do not need a full removal crew." },
      { title: "Packing & storage", text: "Optional packing, dismantling, temporary storage and staged moves where required." },
    ],
    checks: [
      { title: "Give both postcodes", text: "Collection and destination details help companies estimate travel time, crew size and vehicle requirements." },
      { title: "Describe access", text: "Mention stairs, lifts, narrow entrances, long carrying distances and restricted parking." },
      { title: "Compare the same scope", text: "Check whether packing, dismantling, storage, waiting time and disposal are included in each quote." },
    ],
  },
  cleaners: {
    intro: "Need help keeping a home or property clean? Post the job once and compare cleaners for regular, one-off or specialist cleaning work.",
    jobsIntro: "Cleaning services range from routine domestic visits to deeper one-off work and specialist cleaning for particular surfaces or situations.",
    jobs: [
      { title: "Regular domestic cleaning", text: "Recurring cleaning for kitchens, bathrooms, bedrooms and shared living spaces." },
      { title: "Deep cleaning", text: "More detailed one-off cleaning when a property needs extra time and attention." },
      { title: "End-of-tenancy cleaning", text: "Thorough cleaning before or after a move, tenancy change or property handover." },
      { title: "Carpet & specialist cleaning", text: "Carpets, upholstery and other specialist cleaning where suitable equipment is needed." },
    ],
    checks: [
      { title: "List the rooms", text: "Say which areas need cleaning and whether you want a regular or one-off visit." },
      { title: "Mention specialist surfaces", text: "Flag delicate materials, carpets, upholstery or heavy build-up before the cleaner quotes." },
      { title: "Confirm supplies", text: "Ask whether cleaning products and equipment are included or need to be provided." },
    ],
  },
  tilers: {
    intro: "For kitchens, bathrooms, floors, walls and external areas, describe the tiling job once and compare suitable local tilers.",
    jobsIntro: "A good tiling job starts with a sound, properly prepared surface and the right adhesive, grout and tile layout for the area.",
    jobs: [
      { title: "Bathroom tiling", text: "Wall and floor tiling around showers, baths, basins and wet areas." },
      { title: "Kitchen tiling", text: "Splashbacks, wall tiles and tiled floors for kitchens and utility spaces." },
      { title: "Floor tiling", text: "Ceramic, porcelain and stone floor tiles laid over suitably prepared substrates." },
      { title: "Repairs & regrouting", text: "Replacing damaged tiles, renewing grout and repairing smaller tiled areas." },
    ],
    checks: [
      { title: "Give tile size and material", text: "Large-format porcelain, natural stone and mosaics can require different preparation and cutting." },
      { title: "Describe the existing surface", text: "Mention whether old tiles need removing and whether walls or floors need levelling first." },
      { title: "Confirm finishing details", text: "Discuss trims, grout colour, sealants, patterns and edge details before work starts." },
    ],
  },
  "heating-engineers": {
    intro: "From boiler and radiator problems to heating upgrades, describe what is happening once and compare suitable heating engineers.",
    jobsIntro: "Heating work can involve diagnosis, repairs, controls, radiators and larger system changes, so clear symptoms and property details help from the start.",
    jobs: [
      { title: "Boiler problems", text: "Fault investigation, repairs and advice where a boiler is not heating or working correctly." },
      { title: "Radiators", text: "Cold radiators, valve issues, replacements and changes to radiator positions." },
      { title: "Heating controls", text: "Thermostats, programmers and control upgrades for existing heating systems." },
      { title: "System upgrades", text: "Larger heating improvements, replacements and heat-pump-related work where appropriate." },
    ],
    checks: [
      { title: "Describe the symptoms", text: "Say what is not working, when it started and whether error codes or unusual noises are present." },
      { title: "Give system details", text: "Boiler make, age, fuel type and property size can help an engineer understand the likely scope." },
      { title: "Check appropriate registration", text: "Work involving regulated gas systems should be carried out by an appropriately registered professional." },
    ],
  },
  locksmiths: {
    intro: "Locked out, replacing locks or improving door security? Post the job once and compare suitable locksmiths who cover your area.",
    jobsIntro: "Locksmiths can help with emergency access, damaged locks, replacement cylinders and practical security upgrades for doors and windows.",
    jobs: [
      { title: "Emergency access", text: "Help getting back into a property when keys are lost, broken or locked inside." },
      { title: "Lock replacement", text: "Replacing worn, damaged or unsuitable locks and cylinders." },
      { title: "Door lock repairs", text: "Diagnosing stiff, misaligned or failed locking mechanisms and hardware." },
      { title: "Security upgrades", text: "Improving locks and door security after a move, break-in or security review." },
    ],
    checks: [
      { title: "Describe the door and lock", text: "Photos and a clear description can help identify the likely mechanism before arrival." },
      { title: "Ask about call-out charges", text: "For urgent work, confirm the call-out, labour and replacement-part pricing structure." },
      { title: "Confirm the proposed replacement", text: "Ask what lock or cylinder will be fitted and why it suits the door." },
    ],
  },
  "pest-controllers": {
    intro: "If you have a pest problem at home or in a commercial property, describe the signs once and compare suitable pest-control professionals.",
    jobsIntro: "Effective pest control depends on correctly identifying the pest, the extent of activity and the likely entry or nesting points.",
    jobs: [
      { title: "Rodent control", text: "Assessment and treatment for rats and mice, including likely entry-point advice." },
      { title: "Insect treatments", text: "Targeted treatment for common crawling or flying insect infestations." },
      { title: "Wasp nests", text: "Assessment and treatment where wasps are nesting in or around the property." },
      { title: "Commercial pest control", text: "Monitoring and treatment plans for workplaces, shops, hospitality and other premises." },
    ],
    checks: [
      { title: "Describe what you have seen", text: "Droppings, noises, sightings, damage and where activity occurs can help identify the problem." },
      { title: "Mention children and pets", text: "Treatment planning should take occupants, pets and sensitive areas into account." },
      { title: "Ask about follow-up", text: "Some infestations need repeat visits, monitoring or proofing work after the initial treatment." },
    ],
  },
  "tree-surgeons": {
    intro: "For pruning, reductions, removals and other tree work, describe the tree and access once and compare suitable tree surgeons.",
    jobsIntro: "Tree work can involve height, heavy timber and nearby property, so access, condition and the intended outcome all matter before quoting.",
    jobs: [
      { title: "Tree pruning", text: "Selective pruning to manage growth, clearance, shape or damaged branches." },
      { title: "Crown reduction", text: "Reducing the overall crown where appropriate while maintaining a balanced structure." },
      { title: "Tree removal", text: "Sectional dismantling or felling where a tree needs to be removed safely." },
      { title: "Stump grinding", text: "Grinding remaining stumps below ground level after tree removal." },
    ],
    checks: [
      { title: "Give clear photos", text: "Show the whole tree, nearby buildings, boundaries and access for equipment." },
      { title: "Check permissions", text: "Protected trees or conservation areas may require permission before work can begin." },
      { title: "Confirm waste removal", text: "Ask whether branches, timber, chips and stump material are included in the quote." },
    ],
  },
  architects: {
    intro: "Planning an extension, remodel or new project? Describe what you want to achieve and compare architects suited to the scale of the work.",
    jobsIntro: "Architectural services can range from early feasibility and drawings to planning, technical design and support through construction.",
    jobs: [
      { title: "Extensions", text: "Design development and drawings for rear, side and multi-storey home extensions." },
      { title: "Renovations & remodelling", text: "Reworking layouts, circulation and spaces within existing homes and buildings." },
      { title: "Planning applications", text: "Drawings and supporting design information for projects that need planning permission." },
      { title: "New-build design", text: "Concept, planning and technical design for new homes and other buildings." },
    ],
    checks: [
      { title: "Explain your priorities", text: "Budget, space, appearance, accessibility and timescale should be clear from the beginning." },
      { title: "Ask what stage is included", text: "Confirm whether the fee covers concept design, planning, technical drawings and site involvement." },
      { title: "Check relevant experience", text: "Look for experience with projects similar in size, planning context and construction type." },
    ],
  },
  plasterers: {
    intro: "For skimming, repairs, rendering and new plaster finishes, describe the surfaces once and compare suitable plasterers.",
    jobsIntro: "Plastering results depend heavily on substrate condition and preparation, so tell the plasterer what is currently on the wall or ceiling.",
    jobs: [
      { title: "Wall skimming", text: "Creating a smooth finish over suitable existing plaster, boards or prepared surfaces." },
      { title: "Ceiling plastering", text: "Skimming ceilings, including repaired or newly boarded areas." },
      { title: "Plaster repairs", text: "Repairing cracks, damaged patches and areas affected by previous work." },
      { title: "Rendering", text: "Internal or external render systems where suitable for the property and substrate." },
    ],
    checks: [
      { title: "Describe the substrate", text: "Old plaster, plasterboard, brick, paint and damaged surfaces can need different preparation." },
      { title: "Mention damp or movement", text: "Active moisture or structural movement should be understood before cosmetic plastering starts." },
      { title: "Confirm preparation", text: "Ask whether protection, bonding, beads, boarding and disposal are included." },
    ],
  },
  "kitchen-fitters": {
    intro: "Installing or refurbishing a kitchen? Describe the units, worktops and room once and compare suitable kitchen fitters.",
    jobsIntro: "Kitchen fitting combines accurate setting out with cabinets, worktops, appliances and coordination with other trades where needed.",
    jobs: [
      { title: "Full kitchen installation", text: "Fitting cabinets, panels, plinths, doors and the main kitchen layout." },
      { title: "Worktops", text: "Measuring, cutting and fitting suitable worktop materials and associated trims." },
      { title: "Kitchen refurbishments", text: "Replacing fronts, units, worktops or selected elements without rebuilding the whole room." },
      { title: "Appliance & sink fitting", text: "Coordinating appliance housings, sinks and service connections where appropriate specialists are involved." },
    ],
    checks: [
      { title: "Share the kitchen plan", text: "Plans, dimensions and product lists help fitters understand the exact scope." },
      { title: "Confirm other trades", text: "Electrical, gas, plumbing, tiling and decorating may need separate qualified specialists." },
      { title: "Check what is included", text: "Ask about removal, waste, worktop cuts, appliance fitting and making good." },
    ],
  },
  "bathroom-specialists": {
    intro: "Planning a new bathroom or refurbishment? Describe the room and finish you want, then compare suitable bathroom specialists.",
    jobsIntro: "Bathroom projects often combine fitting, plumbing, tiling, waterproofing and finishing, so the exact scope should be clear before work starts.",
    jobs: [
      { title: "Bathroom fitting", text: "Installing baths, basins, toilets, furniture and associated finishes." },
      { title: "Shower installation", text: "Shower trays, enclosures and related fitting as part of bathroom work." },
      { title: "Bathroom refurbishments", text: "Removing old fittings and updating the room with a new layout or finish." },
      { title: "Wet-area finishes", text: "Tiling, panels, sealants and waterproofing details appropriate to wet areas." },
    ],
    checks: [
      { title: "List the full scope", text: "Say whether you need strip-out, plumbing changes, tiling, electrics, decorating and waste removal." },
      { title: "Give product details", text: "Share the sizes and specifications of sanitaryware, furniture and showers if already purchased." },
      { title: "Confirm specialist work", text: "Electrical and other regulated work should be handled by suitably competent professionals." },
    ],
  },
  "drainage-specialists": {
    intro: "Blocked drain, recurring smell or drainage problem? Describe the symptoms once and compare suitable drainage specialists.",
    jobsIntro: "Drainage problems can come from local blockages, damaged pipework, poor falls or wider system issues, so diagnosis matters before repair.",
    jobs: [
      { title: "Blocked drains", text: "Clearing local and external blockages using suitable equipment and access points." },
      { title: "CCTV surveys", text: "Camera inspections to identify damage, obstructions and recurring drainage issues." },
      { title: "Drain repairs", text: "Repairing damaged sections, joints or defects once the cause is understood." },
      { title: "Soakaways & external drainage", text: "Investigation and improvement of surface-water and external drainage systems." },
    ],
    checks: [
      { title: "Describe where it backs up", text: "Say which fixtures or drains are affected and whether the problem is constant or intermittent." },
      { title: "Mention previous problems", text: "Recurring blockages or earlier repairs may point to a deeper defect rather than a one-off blockage." },
      { title: "Ask how diagnosis is charged", text: "Confirm call-out, jetting, survey and repair costs before authorising additional work." },
    ],
  },
  "driveway-specialists": {
    intro: "Planning a new driveway, path or resurfacing project? Describe the area once and compare suitable driveway specialists.",
    jobsIntro: "A durable driveway depends on drainage, excavation, sub-base preparation and a finish suited to the traffic and appearance you want.",
    jobs: [
      { title: "Block paving", text: "New block-paved driveways, paths and borders over a properly prepared base." },
      { title: "Resin driveways", text: "Resin-bound surfacing where the substrate and drainage arrangement are suitable." },
      { title: "Tarmac & asphalt", text: "Hard-wearing driveway surfacing for suitable domestic and access areas." },
      { title: "Gravel & concrete", text: "Gravel, concrete and other practical driveway finishes with appropriate preparation." },
    ],
    checks: [
      { title: "Give the approximate area", text: "Length, width and photos help specialists estimate excavation, materials and labour." },
      { title: "Discuss drainage", text: "Surface-water management should be considered before choosing the final construction." },
      { title: "Compare the full build-up", text: "Ask what excavation depth, sub-base, edging and finish each quote includes." },
    ],
  },
  "window-specialists": {
    intro: "Need replacement windows, glazing repairs or new doors? Describe the openings once and compare suitable window specialists.",
    jobsIntro: "Window and glazing work ranges from sealed-unit repairs to full replacements, doors, rooflights and conservatory-related work.",
    jobs: [
      { title: "Replacement windows", text: "New window units and frames to replace old, damaged or inefficient installations." },
      { title: "Glazing repairs", text: "Replacing failed, cracked or damaged glass and sealed units where suitable." },
      { title: "Doors", text: "Replacement external doors, glazed doors and related frame work." },
      { title: "Rooflights & conservatories", text: "Glazed roof elements, skylights and selected conservatory window work." },
    ],
    checks: [
      { title: "Give sizes and photos", text: "Approximate opening sizes and clear photos help identify the type of window or door." },
      { title: "Explain the problem", text: "Condensation between panes, draughts, damaged hardware and frame problems may need different solutions." },
      { title: "Compare specification", text: "Check frame material, glazing specification, ventilation, finishing and disposal in each quote." },
    ],
  },
};
